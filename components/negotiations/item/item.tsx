import React, { FC, useState } from "react";

import * as S from "./item.style";
import useTranslation from "next-translate/useTranslation";
import Image from "next/image";
import { UserOutlined } from "@components/icons";
import { Button } from "@components/button";
import { Flex, SmallText } from "@styles/globalStyles";
import Link from "next/link";
import {
    getAcceptButtonStatus,
    getDeclineButtonStatus,
    getNegotiationButtonStatus,
    STATUS,
} from "./item.utils";
import ChevronDownOutline from "@components/icons/chevron-down-outline";
import ChevronUpOutline from "@components/icons/chevron-up-outline";
import { Typography } from "@components/typography";
import { InitialNegotiations } from "@components/negotiations/initial-negotiations";
import { UseCountdown } from "@utils/hooks/use-count-down-timer";
import { URLS } from "@/constants/urls";
import {
    useNegotiationsHistoryQuery,
    useNegotiationsQuitMutation,
    useNegotiationsAcceptMutation,
} from "@redux/services/negotiation-api";
import { usePreviewQuery } from "@redux/services/user-api";
import { Loading } from "@components/loading";
import { isToday } from "@utils/common";

export interface ItemProps {
    status: string;
    id: string;
    product: Product;
    customer: Customer;
    customer_last_bid: LastBidData;
    merchant: Merchant;
    merchant_last_bid: LastBidData;
    type: USER_TYPES;
}

const Price: FC<{
    currency: string;
    price: number;
    status: string;
}> = ({ currency, price, status }) => {
    if (!price && status === STATUS.STARTED) {
        return <S.NewPrice size="h4"> --</S.NewPrice>;
    }

    return (
        <S.NewPrice size="h4">
            {price ? (
                <>
                    {price} {currency}
                </>
            ) : (
                <Loading size={27} borderSize={1} />
            )}
        </S.NewPrice>
    );
};

const NegotiationDate: FC<{ createdAt: string }> = ({ createdAt }) => {
    const { t } = useTranslation("negotiations");
    const date = new Date(createdAt);
    const today = isToday(date);

    if (today) {
        return (
            <SmallText>
                {t("today")}{" "}
                {date.toLocaleTimeString([], { timeStyle: "short" })}
            </SmallText>
        );
    }

    return <SmallText>{date.toLocaleDateString("pl-PL")}</SmallText>;
};

const User: FC<{
    userId: string;
}> = ({ userId }) => {
    const { data } = usePreviewQuery({ userId });
    const avatar = data?.avatar;
    return (
        <>
            {avatar ? (
                <Image width={20} height={20} src={avatar} />
            ) : (
                <UserOutlined size={20} />
            )}
        </>
    );
};

const Countdown: FC<{ date?: string }> = ({ date }) => {
    const { t } = useTranslation("negotiations");
    const { time } = UseCountdown(date);

    if (!time) {
        return null;
    }

    return (
        <S.LimitedOffer>
            {t("limitedTo")} <S.Time>{time}</S.Time>
        </S.LimitedOffer>
    );
};

const Actions: FC<{
    status: string;
    handleShowNegotiation: () => void;
    lastBidDate?: string;
    type: USER_TYPES;
    negotiationId: string;
}> = ({ status, handleShowNegotiation, lastBidDate, type, negotiationId }) => {
    const { t } = useTranslation("negotiations");
    const [negotiationsQuit] = useNegotiationsQuitMutation();
    const [negotiationsAccept] = useNegotiationsAcceptMutation();

    const onAccept = async () => {
        await negotiationsAccept({
            productNegotiationId: negotiationId,
        });
    };

    const onDecline = async () => {
        await negotiationsQuit({
            productNegotiationId: negotiationId,
        });
    };

    const onHistory = () => {
        //
    };

    const onBuy = () => {
        //
    };

    if (
        status === STATUS.FINALIZED ||
        status === STATUS.AUTO_CLOSED ||
        status === STATUS.EXPIRED
    ) {
        return (
            <Button
                width={181}
                size="small"
                variant="outlined"
                onClick={onHistory}
            >
                {t("history")}
            </Button>
        );
    }

    if (status === STATUS.SUCCESS && type === "CUSTOMER") {
        return (
            <>
                {lastBidDate && <Countdown date={lastBidDate} />}
                <Button width={167} size="small" onClick={onBuy}>
                    {t("buy")}
                </Button>
            </>
        );
    }

    return (
        <>
            <Button
                disabled={getAcceptButtonStatus(status, type).isDisabled}
                size="small"
                onClick={onAccept}
                width={98}
            >
                {t("accept")}
            </Button>
            <Button
                disabled={getDeclineButtonStatus(status, type).isDisabled}
                size="small"
                variant="outlined"
                onClick={onDecline}
                width={89}
            >
                {t("decline")}
            </Button>
            <Button
                disabled={getNegotiationButtonStatus(status, type).isDisabled}
                size="small"
                variant="outlined"
                onClick={handleShowNegotiation}
                width={167}
            >
                {t("negotiation")}
            </Button>
        </>
    );
};

export const Item: FC<ItemProps> = (props) => {
    const productNegotiationId = props.id;
    const { currentData: historyData } = useNegotiationsHistoryQuery({
        productNegotiationId,
    });
    const { t } = useTranslation("negotiations");
    const [isOpen, setIsOpen] = useState(false);
    const [showNegotiations, setShowNegotiations] = useState(false);

    const handleShowNegotiation = () => {
        setShowNegotiations(!showNegotiations);
    };

    const { status, product, type, customer_last_bid, merchant_last_bid } =
        props;
    const { title, id, price, images, price_currency } = product;

    const history = historyData?.history || [];
    const lastBid = history[0]?.offer_price;
    const bidder = history[0]?.bidder;

    let userId = merchant_last_bid.user_id;
    let lastBidDate = merchant_last_bid.created_at;

    if (bidder === "customer") {
        userId = customer_last_bid.user_id;
        lastBidDate = customer_last_bid.created_at;
    }

    return (
        <S.ItemWrapper active={isOpen}>
            <S.Item>
                <Link href={`${URLS.PRODUCT}/${id}`} passHref>
                    <a>
                        <Image src={images[0]} width={54} height={57} />
                    </a>
                </Link>
                <Link href={`${URLS.PRODUCT}/${id}`}>{title}</Link>
                <div>
                    <S.Price>
                        {price} {price_currency}
                    </S.Price>
                    <Flex gap={8} center>
                        <User userId={userId} />
                        <Price
                            price={lastBid}
                            currency={price_currency}
                            status={status}
                        />
                    </Flex>
                </div>
                <S.Actions>
                    <Actions
                        handleShowNegotiation={handleShowNegotiation}
                        status={status}
                        lastBidDate={lastBidDate}
                        type={type}
                        negotiationId={productNegotiationId}
                    />
                </S.Actions>
                <div>
                    <S.Status status={status}>{t(status)}</S.Status>
                </div>
                <Flex center onClick={() => setIsOpen(!isOpen)}>
                    <S.Hint left text={t("hint")}>
                        {!isOpen ? (
                            <ChevronDownOutline />
                        ) : (
                            <ChevronUpOutline />
                        )}
                    </S.Hint>
                </Flex>
            </S.Item>
            {isOpen && history && (
                <S.History>
                    {history.map(({ created_at, offer_price }, index) => (
                        <S.HistoryItem key={index}>
                            <SmallText>
                                <NegotiationDate createdAt={created_at} />
                            </SmallText>
                            <Flex gap={8} center>
                                <User userId={userId} />
                                <Typography size="h4">
                                    {offer_price} {price_currency}
                                </Typography>
                            </Flex>
                            <S.Price>
                                {price} {price_currency}
                            </S.Price>
                        </S.HistoryItem>
                    ))}
                </S.History>
            )}
            {showNegotiations && (
                <InitialNegotiations
                    isOpen={showNegotiations}
                    label={title}
                    image={images[0]}
                    price={lastBid > 0 ? lastBid : price}
                    currency={price_currency}
                    productNegotiationId={productNegotiationId}
                    handleShowNegotiation={handleShowNegotiation}
                />
            )}
        </S.ItemWrapper>
    );
};
