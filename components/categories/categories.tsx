import { FC } from "react";
import useTranslation from "next-translate/useTranslation";
import Link from "next/link";
import { Typography } from "@/components/typography";

import * as S from "./categories.style";
import { useGetCategoriesQuery } from "@redux/services/product-api";
import { URLS } from "@/constants/urls";

const COLORS = ["#05636D", "#80A0B9", "#859E81", "#D1C7BD", "#856A57"];

export const Categories: FC = () => {
    const { data } = useGetCategoriesQuery(null);
    const { t } = useTranslation("home");

    if (!data || !data.categories) {
        return null;
    }

    const categories = data.categories.filter(
        (category) => category.level === "0",
    );

    return (
        <>
            <Typography size="h4">{t("common:categories")}</Typography>
            <S.Categories>
                {categories.map(({ name, id }, index) => (
                    <Link key={id} href={`${URLS.CATEGORY}/${id}`}>
                        <div>
                            <S.Category
                                bg={
                                    COLORS[index] ||
                                    COLORS[
                                        Math.floor(
                                            Math.random() * COLORS.length,
                                        )
                                    ]
                                }
                                color={
                                    COLORS[index] === "#D1C7BD" ? "#000000" : ""
                                }
                            >
                                <div>{name}</div>
                            </S.Category>
                        </div>
                    </Link>
                ))}
            </S.Categories>
        </>
    );
};
