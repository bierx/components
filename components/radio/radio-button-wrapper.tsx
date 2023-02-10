import React, { FC } from "react";

import * as S from "./radio-button.style";
import { RADIO_BUTTON_VARIANT } from "./radio-button.types";

interface RadioButtonLabelProps {
    label?: string;
    className?: string;
    children: React.ReactNode;
    variant?: RADIO_BUTTON_VARIANT;
}

export const RadioButtonWrapper: FC<RadioButtonLabelProps> = ({
    label,
    children,
    className,
    variant,
}) => {
    return (
        <div className={className}>
            {label && <S.SmallLabel>{label}</S.SmallLabel>}
            <S.InputsWrapper variant={variant}>{children}</S.InputsWrapper>
        </div>
    );
};
