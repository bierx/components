import React, { FC, useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { animated, useTransition } from "@react-spring/web";

import { ProductCardInfo } from "./product-card-info";
import { InitialNegotiations } from "@components/negotiations/initial-negotiations";
import { ProductCardTypes } from "./product-card.types";
import { URLS } from "@/constants/urls";
import { useAppDispatch, useAppSelector } from "@redux/store";

import * as S from "./product-card.style";
import { StarOutlined } from "@components/icons";
import { watchProduct, deleteWatchProduct } from "@redux/services/user-api";

const IMAGE_WIDTH = 233;
const IMAGE_HEIGHT = 311;

export const ProductCard: FC<ProductCardTypes> = (props) => {
    const dispatch = useAppDispatch();
    const [isVisible, toggle] = useState(false);
    const [showNegotiations, setShowNegotiations] = useState(false);
    const { title, price, images = [], id, price_currency } = props;

    const [isFavorite, setIsFavorite] = useState(false);
    const image = images[0];

    const show = () => toggle(true);
    const hide = () => toggle(false);

    const transitions = useTransition(isVisible, {
        from: {
            opacity: 0,
        },
        enter: { opacity: 1 },
        leave: { opacity: 0 },
    });

    const handleShowNegotiation = (event?: React.MouseEvent) => {
        event?.stopPropagation();
        event?.preventDefault();
        setShowNegotiations(!showNegotiations);
    };

    const handleToggleFavorite = async (event?: React.MouseEvent) => {
        event?.preventDefault();
        if (isFavorite) {
            try {
                await dispatch(deleteWatchProduct.initiate(id));
                setIsFavorite(false);
            } catch {
                setIsFavorite(true);
            }
        } else {
            try {
                await dispatch(watchProduct.initiate(id));
                setIsFavorite(true);
            } catch {
                setIsFavorite(false);
            }
        }
    };

    return (
        <>
            <Link href={`${URLS.PRODUCT}/${id}`} passHref>
                <S.Card onMouseEnter={show} onMouseLeave={hide}>
                    <S.AddToFavorites
                        active={isFavorite}
                        onClick={handleToggleFavorite}
                    >
                        <StarOutlined />
                    </S.AddToFavorites>
                    {image && (
                        <Image
                            alt={title}
                            src={image}
                            width={IMAGE_WIDTH}
                            height={IMAGE_HEIGHT}
                        />
                    )}
                    <S.Label size="h5">{title}</S.Label>
                    <S.Price>
                        {price} {price_currency}
                    </S.Price>
                    {transitions(
                        (styles, item) =>
                            item && (
                                <animated.div
                                    style={{
                                        ...styles,
                                        position: "absolute",
                                        zIndex: 999,
                                        transition: "opacity 0.1s",
                                        filter: "drop-shadow(0px -8px 44px rgba(0, 0, 0, 0.75))",
                                        inset: "-27px",
                                    }}
                                >
                                    <ProductCardInfo
                                        {...props}
                                        handleShowNegotiation={
                                            handleShowNegotiation
                                        }
                                        handleToggleFavorite={
                                            handleToggleFavorite
                                        }
                                        isFavorite={isFavorite}
                                    ></ProductCardInfo>
                                </animated.div>
                            ),
                    )}
                </S.Card>
            </Link>
            {showNegotiations && (
                <InitialNegotiations
                    isOpen={showNegotiations}
                    label={title}
                    image={image}
                    price={price}
                    currency={price_currency}
                    productId={id}
                    handleShowNegotiation={handleShowNegotiation}
                />
            )}
        </>
    );
};
