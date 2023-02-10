import React, { FC } from "react";
import Link from "next/link";

import * as S from "./dashboard.style";
import useTranslation from "next-translate/useTranslation";
import { Container } from "@styles/globalStyles";
import { useRouter } from "next/router";
import { Chat, Settings, Time, Star, Location, User } from "@/components/icons";
import { Breadcrumbs } from "@/components/breadcrumbs";
import { Header } from "@components/header";
import { Footer } from "@components/footer";
import { URLS } from "@/constants/urls";

interface DashboardProps {
    className?: string;
    children?: React.ReactNode;
}

const MENU = [
    {
        url: URLS.MY_ACCOUNT,
        name: "menu1",
        Icon: <User />,
    },
    {
        url: URLS.MY_ADDRESSES,
        name: "menu2",
        Icon: <Location />,
    },
    {
        url: URLS.NEGOTIATIONS,
        name: "menu3",
        Icon: <Chat />,
    },
    {
        url: "/",
        name: "menu4",
        Icon: <Time />,
    },
    {
        url: "/",
        name: "menu5",
        Icon: <Star />,
    },
    {
        url: "/",
        name: "menu6",
        Icon: <Settings />,
    },
];

export const Dashboard: FC<DashboardProps> = ({ children, className }) => {
    const { t } = useTranslation("dashboard");
    const router = useRouter();
    let pathname = router.pathname;

    if (pathname.split("/").length > 2) {
        pathname = `/${pathname.split("/")[1]}`;
    }

    return (
        <>
            <Header />
            <Container>
                <S.Dashboard>
                    <S.Menu>
                        {MENU.map(({ url, name, Icon }, index) => (
                            <Link key={`${url}-${index}`} href={url}>
                                <S.MenuItem active={pathname === url}>
                                    <S.Icon>{Icon}</S.Icon>
                                    {t(name)}
                                </S.MenuItem>
                            </Link>
                        ))}
                    </S.Menu>
                    <S.DashboardContent className={className}>
                        <Breadcrumbs />
                        {children}
                    </S.DashboardContent>
                </S.Dashboard>
            </Container>
            <Footer />
        </>
    );
};
