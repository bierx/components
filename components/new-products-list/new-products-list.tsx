import { FC } from "react";
import useTranslation from "next-translate/useTranslation";

import { Typography } from "@/components/typography";
import { ProductCard } from "@/components/product-card";
import { ScrollableList } from "@/components/scrollable-list";
import { useGetProductsQuery } from "@/redux/services/store";
import { ProductCardTypes } from "@components/product-card/product-card.types";
import { ShowMore } from "@components/show-more";
import { URLS } from "@/constants/urls";

export const NewProductsList: FC = () => {
    const { data } = useGetProductsQuery(null);
    const { t } = useTranslation("home");

    if (!data || !data?.list.length) {
        return null;
    }

    return (
        <>
            <Typography size="h4">{t("list6")}</Typography>
            <ScrollableList>
                {data?.list.map((props: ProductCardTypes) => (
                    <ProductCard key={props.id} {...props} />
                ))}
                <ShowMore url={URLS.NEW_PRODUCTS} />
            </ScrollableList>
        </>
    );
};
