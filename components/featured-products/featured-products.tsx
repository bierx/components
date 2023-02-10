import { FC } from "react";
import useTranslation from "next-translate/useTranslation";

import { Typography } from "@/components/typography";
import { ShowMore } from "@components/show-more";
import { ProductCard } from "@/components/product-card";
import { ScrollableList } from "@/components/scrollable-list";
import { URLS } from "@/constants/urls";

const PRODUCT_LIST = [
    {
        title: "Armchair straight from the PRL",
        price: 10500,
        price_currency: "PLN",
        url: "/",
        images: ["/images/img1.png"],
        category: "Meble",
        location: "Pomorskie",
        weight: 80,
        id: "1",
        sizes: [
            {
                type: "Krzesło",
                value: "100x30x78 cm /  x4 szt.",
            },
            {
                type: "Stół",
                value: "100x30x78 cm",
            },
        ],
    },
    {
        title: "Armchair straight from the PRL",
        price: 10500,
        price_currency: "PLN",
        url: "/",
        images: ["/images/img2.png"],
        category: "Meble",
        location: "Pomorskie",
        weight: 80,
        id: "2",
        sizes: [
            {
                type: "Krzesło",
                value: "100x30x78 cm /  x4 szt.",
            },
            {
                type: "Stół",
                value: "100x30x78 cm",
            },
        ],
    },
    {
        title: "Armchair straight from the PRL",
        price: 10500,
        price_currency: "PLN",
        url: "/",
        images: ["/images/img3.png"],
        category: "Meble",
        location: "Pomorskie",
        weight: 80,
        id: "3",
        sizes: [
            {
                type: "Krzesło",
                value: "100x30x78 cm /  x4 szt.",
            },
            {
                type: "Stół",
                value: "100x30x78 cm",
            },
        ],
    },
    {
        title: "Armchair straight from the PRL",
        price: 10500,
        price_currency: "PLN",
        url: "/",
        images: ["/images/img4.png"],
        category: "Meble",
        location: "Pomorskie",
        weight: 80,
        id: "4",
        sizes: [
            {
                type: "Krzesło",
                value: "100x30x78 cm /  x4 szt.",
            },
            {
                type: "Stół",
                value: "100x30x78 cm",
            },
        ],
    },
    {
        title: "Armchair straight from the PRL",
        price: 10500,
        price_currency: "PLN",
        url: "/",
        images: ["/images/img5.png"],
        category: "Meble",
        location: "Pomorskie",
        weight: 80,
        id: "5",
        sizes: [
            {
                type: "Krzesło",
                value: "100x30x78 cm /  x4 szt.",
            },
            {
                type: "Stół",
                value: "100x30x78 cm",
            },
        ],
    },
    {
        title: "Armchair straight from the PRL",
        price: 10500,
        price_currency: "PLN",
        url: "/",
        images: ["/images/img1.png"],
        category: "Meble",
        location: "Pomorskie",
        weight: 80,
        id: "5",
        sizes: [
            {
                type: "Krzesło",
                value: "100x30x78 cm /  x4 szt.",
            },
            {
                type: "Stół",
                value: "100x30x78 cm",
            },
        ],
    },
    {
        title: "Armchair straight from the PRL",
        price: 10500,
        price_currency: "PLN",
        url: "/",
        images: ["/images/img2.png"],
        category: "Meble",
        location: "Pomorskie",
        weight: 80,
        id: "7",
        sizes: [
            {
                type: "Krzesło",
                value: "100x30x78 cm /  x4 szt.",
            },
            {
                type: "Stół",
                value: "100x30x78 cm",
            },
        ],
    },
    {
        title: "Armchair straight from the PRL",
        price: 10500,
        price_currency: "PLN",
        url: "/",
        images: ["/images/img3.png"],
        category: "Meble",
        location: "Pomorskie",
        weight: 80,
        id: "8",
        sizes: [
            {
                type: "Krzesło",
                value: "100x30x78 cm /  x4 szt.",
            },
            {
                type: "Stół",
                value: "100x30x78 cm",
            },
        ],
    },
    {
        title: "Armchair straight from the PRL",
        price: 10500,
        price_currency: "PLN",
        url: "/",
        images: ["/images/img4.png"],
        category: "Meble",
        location: "Pomorskie",
        weight: 80,
        id: "9",
        sizes: [
            {
                type: "Krzesło",
                value: "100x30x78 cm /  x4 szt.",
            },
            {
                type: "Stół",
                value: "100x30x78 cm",
            },
        ],
    },
    {
        title: "Armchair straight from the PRL",
        price: 10500,
        price_currency: "PLN",
        url: "/",
        images: ["/images/img5.png"],
        category: "Meble",
        location: "Pomorskie",
        weight: 80,
        id: "10",
        sizes: [
            {
                type: "Krzesło",
                value: "100x30x78 cm /  x4 szt.",
            },
            {
                type: "Stół",
                value: "100x30x78 cm",
            },
        ],
    },
];

export const FeaturedProducts: FC = () => {
    const { t } = useTranslation("home");

    return (
        <>
            <Typography size="h4">{t("list4")}</Typography>
            <ScrollableList>
                {PRODUCT_LIST.map((props, index) => (
                    <ProductCard key={index} {...props} />
                ))}
                <ShowMore url={URLS.FEATURED_PRODUCTS} />
            </ScrollableList>
        </>
    );
};
