import React from "react";
import { RadioButtonProps } from "./radio-button.types";

import * as S from "./radio-button.style";

export const RadioButton = React.forwardRef<HTMLInputElement, RadioButtonProps>(
    (props, ref) => {
        const { name, label, children, ...rest } = props;
        return (
            <S.Container>
                <S.Input ref={ref} name={name} type="radio" {...rest} />
                <S.CheckMark />
                <S.Label>{label}</S.Label>
                {children && <S.Children>{children}</S.Children>}
                <S.Bg />
            </S.Container>
        );
    },
);
