import { FC, useEffect } from "react";
import useTranslation from "next-translate/useTranslation";

import { Typography } from "@/components/typography";
import { ProductCard } from "@/components/product-card";
import { ScrollableList } from "@/components/scrollable-list";
import { useAppSelector, useAppDispatch } from "@redux/store";
import { getWatchedProducts } from "@redux/services/user-api";
import { URLS } from "@/constants/urls";
import { ShowMore } from "@components/show-more";

export const MyProductsList: FC = () => {
    const { t } = useTranslation("home");
    const dispatch = useAppDispatch();
    const isLoggedIn = useAppSelector(({ auth }) => auth.isLoggedIn);
    const products = useAppSelector(({ user }) => user.watchedProducts);

    useEffect(() => {
        if (isLoggedIn) {
            dispatch(getWatchedProducts.initiate(null));
        }
    }, [isLoggedIn]);

    if (!isLoggedIn || !products || !products.length) {
        return null;
    }

    return (
        <>
            <Typography size="h4">{t("list5")}</Typography>
            <ScrollableList>
                {products.map((props) => (
                    <ProductCard key={props.id} {...props} />
                ))}
                <ShowMore url={URLS.MY_PRODUCTS} />
            </ScrollableList>
        </>
    );
};
