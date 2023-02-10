import React, { FC } from "react";
import useTranslation from "next-translate/useTranslation";

import { ProductCardTypes } from "./product-card.types";
import { Button } from "@/components/button";
import { Heart, LocationSmall } from "@/components/icons";

import * as S from "./product-card.style";

export const ProductCardInfo: FC<ProductCardTypes> = ({
    title,
    price,
    image,
    category,
    location,
    weight,
    sizes = [],
    handleShowNegotiation,
    handleToggleFavorite,
    isFavorite,
    price_negotiable,
}) => {
    const { t } = useTranslation("home");

    return (
        <S.ProductInfo image={image}>
            <S.Header>
                <S.Category>{category}</S.Category>
                <S.Price>{price}</S.Price>
            </S.Header>
            <S.Label size="h5">{title}</S.Label>
            {sizes && (
                <S.Sizes>
                    {sizes.map(({ type, value }, index) => (
                        <S.Size key={index}>
                            <S.SizeType>{type}</S.SizeType> {value}
                        </S.Size>
                    ))}
                </S.Sizes>
            )}
            {weight && <S.Weight>{t("weight", { weight })}</S.Weight>}
            <S.CtaWrapper withNegotiation={price_negotiable}>
                <Button size="small">{t("addToCart")}</Button>
                {price_negotiable && (
                    <Button
                        onClick={handleShowNegotiation}
                        size="small"
                        variant="outlined"
                    >
                        {t("negotiate")}
                    </Button>
                )}
                <Button
                    onClick={handleToggleFavorite}
                    rounded
                    size="small"
                    variant="outlined"
                >
                    <S.AddToFavoritesWrapper active={isFavorite}>
                        <Heart />
                    </S.AddToFavoritesWrapper>
                </Button>
            </S.CtaWrapper>
            {location && (
                <S.Location>
                    <LocationSmall />
                    {location}
                </S.Location>
            )}
        </S.ProductInfo>
    );
};
