import React, { FC } from "react";
import { ButtonProps } from "./button.types";
import * as S from "./button.style";

export const Button: FC<ButtonProps> = (props) => {
    const { children, ...rest } = props;

    return <S.Button {...rest}>{children}</S.Button>;
};
