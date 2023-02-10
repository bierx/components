import React, { FC } from "react";
import NextLink from "next/link";

import * as S from "./link.style";

export interface LinkProps {
    href: string;
    children: React.ReactNode;
    underline?: boolean;
    highligh?: boolean;
    className?: string;
}

export const Link: FC<LinkProps> = ({
    children,
    underline = true,
    highligh = true,
    href,
    ...props
}) => (
    <NextLink href={href} passHref>
        <S.Link {...{ underline, highligh, ...props }}>{children}</S.Link>
    </NextLink>
);
