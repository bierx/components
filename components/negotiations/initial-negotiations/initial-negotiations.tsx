import React, { FC, useState } from "react";
import { Modal } from "@/components/modal";

import * as S from "./initial-negotiation.style";
import { Typography } from "@components/typography";
import useTranslation from "next-translate/useTranslation";
import Image from "next/image";
import * as yup from "yup";
import { FORM_FIELDS, FORM_OPTIONS } from "./initial-negotiations.utils";
import { Controller, useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { Error } from "@components/error";
import { Input, InputWrapper } from "@components/input";
import { validatePrice } from "@utils/form.helper";
import { ProductCardTypes } from "@/components/product-card/product-card.types";
import { Tooltip } from "@styles/globalStyles";
import {
    useNegotiationsInitMutation,
    useNegotiationsBidMutation,
} from "@redux/services/negotiation-api";

interface InitialNegotiationsProps {
    isOpen: boolean;
    label: ProductCardTypes["title"];
    price: ProductCardTypes["price"];
    currency: ProductCardTypes["price_currency"];
    image: string;
    handleShowNegotiation?: ProductCardTypes["handleShowNegotiation"];
    productNegotiationId?: string;
    productId?: string;
}

const NEGOTIATION_IN_PROGRESS = false; // temporary set to false @todo get data from backend

export const InitialNegotiations: FC<InitialNegotiationsProps> = ({
    isOpen,
    label,
    image,
    price,
    currency,
    handleShowNegotiation,
    productNegotiationId,
    productId,
}) => {
    const { t } = useTranslation("common");
    const [negotiationInProgress] = useState(NEGOTIATION_IN_PROGRESS);
    const [negotiationsBid] = useNegotiationsBidMutation();
    const [negotiationsInit] = useNegotiationsInitMutation();
    const schema = yup
        .object({
            [FORM_FIELDS.PRICE]: yup
                .string()
                .required(t`negotiationError3`)
                .matches(/^\d+$/, t`negotiationError1`)
                .test(
                    "is-valid-price",
                    t`negotiationError2`,
                    // eslint-disable-next-line @typescript-eslint/ban-ts-comment
                    // @ts-ignore
                    validatePrice(price),
                ),
        })
        .required(t`negotiationError3`);

    const {
        handleSubmit,
        formState: { errors },
        control,
    } = useForm({ ...FORM_OPTIONS, resolver: yupResolver(schema) });
    const onSubmit = async (payload) => {
        let id = productNegotiationId;

        if (!id) {
            const { negotiation_id } = await negotiationsInit({
                sessionId: Date.now(),
                productUuid: productId,
            }).unwrap();

            id = negotiation_id;
        }

        if (id) {
            await negotiationsBid({
                sessionId: Date.now(),
                productNegotiationId: id,
                isFinal: false,
                priceOffer: Number(payload.priceOffer),
            });
        }

        handleShowNegotiation && handleShowNegotiation();
    };

    const error = errors[FORM_FIELDS.PRICE];

    return (
        <div>
            <Modal
                width={485}
                open={isOpen}
                verticalCenter
                onClose={handleShowNegotiation}
            >
                <S.InitialNegotiations>
                    {error && <Error>{error.message}</Error>}
                    <Typography size="h3">{t("negotiationHeader")}</Typography>
                    <S.Product>
                        {image && <Image width={54} height={57} src={image} />}
                        {label}
                    </S.Product>
                    <S.Price>
                        {price} {currency}
                    </S.Price>
                    <S.PriceLabel size="h6">{t("priceLabel")}</S.PriceLabel>
                    <form onSubmit={handleSubmit(onSubmit)} method="POST">
                        <InputWrapper>
                            <Controller
                                name={FORM_FIELDS.PRICE}
                                control={control}
                                render={({ field }) => (
                                    <Input
                                        {...field}
                                        error={
                                            error?.type === "required"
                                                ? ""
                                                : error && t("numbers")
                                        }
                                        text={
                                            error?.type === "required"
                                                ? ""
                                                : t("numbers")
                                        }
                                        label={t("negotiationLabel")}
                                        smallText={currency}
                                        asPlaceholder
                                        showIcons={false}
                                    />
                                )}
                            />
                        </InputWrapper>
                        {negotiationInProgress ? (
                            <Tooltip text={t("negotiationInProgress")} center>
                                <S.Button disabled block type="submit">
                                    {t("common:submit")}
                                </S.Button>
                            </Tooltip>
                        ) : (
                            <S.Button block type="submit">
                                {t("common:submit")}
                            </S.Button>
                        )}
                    </form>
                </S.InitialNegotiations>
            </Modal>
        </div>
    );
};
