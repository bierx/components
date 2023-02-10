import React, { FC } from "react";
import useTranslation from "next-translate/useTranslation";
import * as S from "@components/breadcrumbs/breadcrumbs.style";
import Link from "next/link";

interface CrumbProps {
    text: string;
    href?: string;
    last: boolean;
}

export const Crumb: FC<CrumbProps> = ({ text, href, last = false }) => {
    const { t } = useTranslation("routes");

    if (last) {
        return <S.Crumb last>{t(text)}</S.Crumb>;
    }

    return (
        <Link href={href} passHref>
            <S.Crumb>{t(text)}</S.Crumb>
        </Link>
    );
};
