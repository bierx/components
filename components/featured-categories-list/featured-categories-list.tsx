import { FC } from "react";
import useTranslation from "next-translate/useTranslation";
import Link from "next/link";

import { Typography } from "@/components/typography";
import { ScrollableList } from "@/components/scrollable-list";

import * as S from "./featured-categories-list.style";

const PRODUCT_LIST = [
    {
        title: "Vintage",
        url: "/",
    },
    {
        title: "Obrazy i ramki",
        url: "/",
    },
    {
        title: "bookshelf",
        url: "/",
    },
    {
        title: "łapacz snów rękodzieła",
        url: "/",
    },
    {
        title: "mechanical dryer",
        url: "/",
    },
    {
        title: "bookshelf",
        url: "/",
    },
];

export const FeatureCategoriesList: FC = () => {
    const { t } = useTranslation("home");

    return (
        <>
            <Typography size="h4">{t("list7")}</Typography>
            <ScrollableList>
                {PRODUCT_LIST.map(({ title, url }, index) => (
                    <Link key={index} href={url}>
                        <S.Category>{title}</S.Category>
                    </Link>
                ))}
            </ScrollableList>
        </>
    );
};
