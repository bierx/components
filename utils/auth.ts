import { setCookie, destroyCookie } from "nookies";
import { GetServerSidePropsContext, PreviewData } from "next";
import { ParsedUrlQuery } from "querystring";
import {
    AUTH_TOKEN_KEY,
    REFRESH_TOKEN_KEY,
    AUTH_TOKENS_AGE,
} from "@/constants/common";

export const storeAuthTokens = (
    context: GetServerSidePropsContext<ParsedUrlQuery, PreviewData> | null,
    {
        accessToken,
        refreshToken,
    }: { accessToken?: string; refreshToken?: string },
): void => {
    if (accessToken) {
        setCookie(context, AUTH_TOKEN_KEY, accessToken, {
            maxAge: AUTH_TOKENS_AGE,
            path: "/",
        });
    }

    if (refreshToken) {
        setCookie(context, REFRESH_TOKEN_KEY, refreshToken, {
            maxAge: AUTH_TOKENS_AGE,
            path: "/",
        });
    }
};

export const destroyAuthTokens = (
    context: GetServerSidePropsContext<ParsedUrlQuery, PreviewData> | null,
): void => {
    destroyCookie(context, AUTH_TOKEN_KEY, {
        path: "/",
    });

    destroyCookie(context, REFRESH_TOKEN_KEY, {
        path: "/",
    });
};
