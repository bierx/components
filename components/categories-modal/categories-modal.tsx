import { FC } from "react";
import useTranslation from "next-translate/useTranslation";
import Link from "next/link";

import {
    ArmChair,
    Mat,
    WashingMachine,
    Ceramic,
    Idea,
    Grid,
} from "@/components/icons";

import { Container } from "@/styles/globalStyles";

import * as S from "./categories-modal.style";

const CATEGORIES = [
    {
        name: "seeAll",
        url: "",
        icon: <Grid />,
    },
    {
        name: "Meble",
        url: "",
        icon: <ArmChair />,
        bg: "#05636D",
    },
    {
        name: "Elektronika",
        url: "",
        icon: <WashingMachine />,
        bg: "#80A0B9",
    },
    {
        name: "Wyposażenie",
        icon: <Mat />,
        url: "",
        bg: "#859E81",
    },
    {
        name: "Oświetlenie",
        url: "",
        icon: <Idea />,
        bg: "#D1C7BD",
        color: "#000000",
    },
    {
        name: "Sprzęt",
        url: "",
        icon: <Ceramic />,
        bg: "#856A57",
    },
];

export const CategoriesModal: FC = () => {
    const { t } = useTranslation("common");

    return (
        <>
            <S.Outer></S.Outer>
            <S.Modal>
                <Container>
                    <S.Categories>
                        <div>
                            {CATEGORIES.map(
                                ({ name, url, icon, color, bg }, index) => (
                                    <div key={index}>
                                        <Link href={url}>
                                            <S.Category color={color} bg={bg}>
                                                {icon}
                                                {t(name)}
                                            </S.Category>
                                        </Link>
                                    </div>
                                ),
                            )}
                        </div>
                        <S.SubCategories>
                            <S.CategoryHeader>Stół</S.CategoryHeader>
                            <Link href={""}>
                                <S.Category>Phasellussapien</S.Category>
                            </Link>
                            <Link href={""}>
                                <S.Category>Nam</S.Category>
                            </Link>
                            <Link href={""}>
                                <S.Category>Consectetur</S.Category>
                            </Link>
                        </S.SubCategories>
                        <S.SubCategories>
                            <S.CategoryHeader>Składany</S.CategoryHeader>
                            <Link href={""}>
                                <S.Category>Inny</S.Category>
                            </Link>
                            <Link href={""}>
                                <S.Category>Phasellussapien</S.Category>
                            </Link>
                            <Link href={""}>
                                <S.Category>Nam</S.Category>
                            </Link>
                            <Link href={""}>
                                <S.Category>Consectetur</S.Category>
                            </Link>
                        </S.SubCategories>
                    </S.Categories>
                </Container>
            </S.Modal>
        </>
    );
};
