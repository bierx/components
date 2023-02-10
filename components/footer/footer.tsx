import { FC } from "react";
import useTranslation from "next-translate/useTranslation";
import Link from "next/link";

import { Logo } from "@/components/icons";
import { Typography } from "@/components/typography";

import * as S from "./footer.style";

const LINKS = [
    {
        label: "aboutUs",
        link: "/",
    },
    {
        label: "privacyPolicy",
        link: "/",
    },
    {
        label: "cookiesPolicy",
        link: "/",
    },
    {
        label: "regulation",
        link: "/",
    },
];

export const Footer: FC<{ banner?: boolean; img?: string }> = ({
    banner,
    img,
}) => {
    const { t } = useTranslation("common");

    return (
        <S.ImageWrapper img={img}>
            {banner && (
                <>
                    <S.Divider />
                    <S.Banner />
                </>
            )}

            <S.Wrapper>
                <S.Footer>
                    <S.Left>
                        <Logo />
                        <Typography size="h5">{t("copyright")}</Typography>
                    </S.Left>
                    {LINKS.map(({ label, link }, index) => (
                        <Link key={index} href={link}>
                            <Typography size="h5">{t(label)}</Typography>
                        </Link>
                    ))}
                </S.Footer>
            </S.Wrapper>
        </S.ImageWrapper>
    );
};
