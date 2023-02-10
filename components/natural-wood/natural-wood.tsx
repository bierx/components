import { FC, useEffect, useState } from "react";
import { Typography } from "@/components/typography";
import { ProductCard } from "@/components/product-card";

import { ScrollableList } from "@/components/scrollable-list";
import { getProducts } from "@redux/services/store";
import { getCategories } from "@redux/services/product-api";
import { useAppDispatch } from "@redux/store";
import { ShowMore } from "@components/show-more";
import { URLS } from "@/constants/urls";

export const NaturalWood: FC = () => {
    const dispatch = useAppDispatch();
    const [products, setProducts] = useState([]);
    const [category, setCategory] = useState<{
        id: string;
        level?: string;
        name: string;
    } | null>(null);

    useEffect(() => {
        (async () => {
            const categories = await dispatch(getCategories.initiate(null));
            const category = categories && categories?.data?.categories[0];
            const id = category?.id;
            if (id) {
                const response = await dispatch(
                    getProducts.initiate({ category: id }),
                );
                setProducts(response?.data?.list);
                setCategory(category);
            }
        })();
    }, []);

    if (!products || !products.length) {
        return null;
    }

    return (
        <>
            <Typography size="h4">{category?.name}</Typography>
            <ScrollableList>
                {products.map((props) => (
                    <ProductCard key={props.id} {...props} />
                ))}
                <ShowMore url={`${URLS.PRODUCT}/${category?.id}`} />
            </ScrollableList>
        </>
    );
};
