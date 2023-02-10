import { FC } from "react";
import Link from "next/link";

import * as S from "./horizontal-menu.style";
import useTranslation from "next-translate/useTranslation";
import { useRouter } from "next/router";
import { URLS } from "@/constants/urls";

const MENU = [
    {
        name: "received",
        url: "/negotiations/received",
    },
    {
        name: "sent",
        url: "/negotiations/sent",
    },
];

export const HorizontalMenu: FC = () => {
    const { t } = useTranslation("negotiations");
    const router = useRouter();
    const type = router.asPath;

    return (
        <S.HorizontalMenu>
            {MENU.map(({ name, url }, index) => (
                <Link key={`${url}-${index}`} href={url} passHref>
                    <S.MenuItem
                        active={
                            url === type ||
                            (type === URLS.NEGOTIATIONS && index == 0)
                        }
                    >
                        {t(name)}
                    </S.MenuItem>
                </Link>
            ))}
        </S.HorizontalMenu>
    );
};
