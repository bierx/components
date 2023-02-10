import { FC } from "react";
import useTranslation from "next-translate/useTranslation";
import Trans from "next-translate/Trans";

import { Typography } from "@/components/typography";
import Link from "next/link";
import { Button } from "@/components/button";
import { Container } from "@/styles/globalStyles";

import * as S from "./banner.style";

export interface BannerProps {
    className?: string;
    bg?: string;
}

export const Banner: FC<BannerProps> = ({ className, bg }) => {
    const { t } = useTranslation("home");

    return (
        <S.Banner bg={bg} className={className}>
            <S.Inner>
                <Container>
                    <Trans
                        i18nKey="home:header"
                        components={[<Typography size="h1" />, <div />]}
                    />
                    <S.Desc>{t("desc")}</S.Desc>
                    <Link href={""}>
                        <Button size="large">{t("cta")}</Button>
                    </Link>
                </Container>
            </S.Inner>
        </S.Banner>
    );
};
