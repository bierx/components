import { FC, useState } from "react";
import useTranslation from "next-translate/useTranslation";
import NextLink from "next/link";
import { useAppDispatch, useAppSelector } from "@/redux/store";
import { useRouter } from "next/router";

import { Search } from "@/components/search";
import { Button } from "@/components/button";
import { Logo, Logout } from "@/components/icons";
import { CategoriesSelect } from "@/components/categories-select";
import { CategoriesModal } from "@/components/categories-modal";
import { Link } from "@/components/link";
import { URLS } from "@/constants/urls";

import { destroyAuthTokens } from "@/utils/auth";
import { useGetUserQuery } from "@/redux/services/user-api";
import { clearUser } from "@/redux/slices/user";
import { logout } from "@/redux/slices/auth";

import { BoldText, Container } from "@/styles/globalStyles";
import * as S from "./header.style";

export const Header: FC = () => {
    useGetUserQuery(null);
    const { t } = useTranslation("common");
    const dispatch = useAppDispatch();
    const router = useRouter();

    const [showCategories, setIsOpen] = useState(false);
    const [showDropdown, setShowDropdown] = useState(false);
    const email = useAppSelector(({ user }) => user.email);
    const isLoggedIn = useAppSelector(({ auth }) => auth.isLoggedIn);
    const handleToggleSelect = (state: boolean) => {
        setIsOpen(state);

        if (state) {
            document.body.style.overflow = "hidden";
        } else {
            document.body.style.overflow = "unset";
        }
    };

    const handleUserClick = () => {
        setShowDropdown(!showDropdown);
    };

    const handleLogout = () => {
        destroyAuthTokens(null);
        dispatch(clearUser());
        dispatch(logout());
    };

    const handleSellButtonClick = () => {
        if (isLoggedIn && router.pathname === URLS.ADD_PRODUCT) {
            router.reload();
        }
    };

    return (
        <Container relative>
            <S.Header>
                <Link href={URLS.HOME}>
                    <Logo />
                </Link>
                <CategoriesSelect onChange={handleToggleSelect} />
                <Search />
                <S.Right>
                    {!isLoggedIn && (
                        <NextLink href={URLS.LOGIN}>
                            <Button size="tiny" width={118} variant="outlined">
                                {t("login")}
                            </Button>
                        </NextLink>
                    )}
                    <div onClick={handleSellButtonClick}>
                        <NextLink
                            href={isLoggedIn ? URLS.ADD_PRODUCT : URLS.REGISTER}
                        >
                            <S.SellButton size="tiny" width={148}>
                                {t("sell")}
                            </S.SellButton>
                        </NextLink>
                    </div>
                    {isLoggedIn && (
                        <S.UserDropdownWrapper onClick={handleUserClick}>
                            <S.UserIcon />
                            {showDropdown && (
                                <S.UserDropdown>
                                    <S.UserInfo>
                                        <S.UserIcon size={48} />
                                        <div>
                                            <BoldText>{t("userName")}</BoldText>
                                            <S.UserName>{email}</S.UserName>
                                        </div>
                                    </S.UserInfo>
                                    <S.UserMenu>
                                        <div>
                                            <Link
                                                highligh={false}
                                                underline={false}
                                                href={URLS.MY_ACCOUNT}
                                            >
                                                {t("userMenu1")}
                                            </Link>
                                        </div>
                                        <div>
                                            <Link
                                                highligh={false}
                                                underline={false}
                                                href={`${URLS.NEGOTIATIONS}/received`}
                                            >
                                                {t("userMenu2")}
                                            </Link>
                                        </div>
                                        <div>
                                            <Link
                                                highligh={false}
                                                underline={false}
                                                href={"/"}
                                            >
                                                {t("userMenu3")}
                                            </Link>
                                        </div>
                                    </S.UserMenu>
                                    <S.Logout onClick={handleLogout}>
                                        <Logout /> {t("logout")}
                                    </S.Logout>
                                </S.UserDropdown>
                            )}
                        </S.UserDropdownWrapper>
                    )}
                </S.Right>
            </S.Header>
            {showCategories && <CategoriesModal />}
        </Container>
    );
};
