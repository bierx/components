import { FC } from "react";
import useTranslation from "next-translate/useTranslation";

import { Typography } from "@/components/typography";
import { ProductCard } from "@/components/product-card";
import { ScrollableList } from "@/components/scrollable-list";

const PRODUCT_LIST = [
    {
        title: "Armchair straight from the PRL",
        price: 10500,
        price_currency: "PLN",
        id: "1",
        url: "/checkout",
        images: ["/images/img1.png"],
        category: "Meble",
        location: "Pomorskie",
        weight: 80,
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
        id: "1",
        url: "/checkout",
        images: ["/images/img2.png"],
        category: "Meble",
        location: "Pomorskie",
        weight: 80,
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
        id: "1",
        url: "/checkout",
        images: ["/images/img3.png"],
        category: "Meble",
        location: "Pomorskie",
        weight: 80,
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
        id: "1",
        url: "/checkout",
        images: ["/images/img4.png"],
        category: "Meble",
        location: "Pomorskie",
        weight: 80,
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
        id: "1",
        url: "/checkout",
        images: ["/images/img5.png"],
        category: "Meble",
        location: "Pomorskie",
        weight: 80,
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
        id: "1",
        url: "/checkout",
        images: ["/images/img1.png"],
        category: "Meble",
        location: "Pomorskie",
        weight: 80,
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
        id: "1",
        url: "/checkout",
        images: ["/images/img2.png"],
        category: "Meble",
        location: "Pomorskie",
        weight: 80,
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
        id: "1",
        url: "/checkout",
        images: ["/images/img3.png"],
        category: "Meble",
        location: "Pomorskie",
        weight: 80,
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
        id: "1",
        url: "/checkout",
        images: ["/images/img4.png"],
        category: "Meble",
        location: "Pomorskie",
        weight: 80,
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
        id: "1",
        url: "/checkout",
        images: ["/images/img5.png"],
        category: "Meble",
        location: "Pomorskie",
        weight: 80,
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

export const SimilarProducts: FC = () => {
    const { t } = useTranslation("common");

    return (
        <div>
            <Typography size="h4">{t("similarProducts")}</Typography>
            <ScrollableList>
                {PRODUCT_LIST.map((props, index) => (
                    <ProductCard key={index} {...props} />
                ))}
            </ScrollableList>
        </div>
    );
};
