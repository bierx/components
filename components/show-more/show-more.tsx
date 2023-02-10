import { FC } from "react";

import * as S from "./show-more.style";
import useTranslation from "next-translate/useTranslation";
import Link from "next/link";
import { ArrRightOutlined } from "@/components/icons";

interface ShowMoreProps {
    url: string;
}

export const ShowMore: FC<ShowMoreProps> = ({ url }) => {
    const { t } = useTranslation("common");
    return (
        <Link href={url}>
            <S.ShowMore>
                <div>
                    <ArrRightOutlined />
                    <S.Label>{t("showMore")}</S.Label>
                </div>
            </S.ShowMore>
        </Link>
    );
};
