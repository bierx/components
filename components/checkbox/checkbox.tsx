import React, { ReactNode } from "react";
import { CheckMark } from "@/components/icons";

import * as S from "./checkbox.style";

interface CheckboxProps {
    checked?: boolean;
    onChange?: (event: React.ChangeEvent<HTMLInputElement>) => void;
    required?: boolean;
    name?: string;
    defaultChecked?: boolean;
    children?: ReactNode;
    error?: boolean;
    className?: string;
    labelPosition?: string;
}

export const Checkbox = React.forwardRef<HTMLInputElement, CheckboxProps>(
    ({ className, labelPosition, checked, error, children, ...props }, ref) => (
        <S.CheckboxContainer className={className} error={error}>
            {labelPosition === "left" ? (
                <>
                    <span>{children}</span>
                    <S.HiddenCheckbox ref={ref} checked={checked} {...props} />
                </>
            ) : (
                <S.HiddenCheckbox ref={ref} checked={checked} {...props} />
            )}
            <S.StyledCheckbox checked={checked}>
                <S.Icon>
                    <CheckMark />
                </S.Icon>
            </S.StyledCheckbox>
            {labelPosition !== "left" && <span>{children}</span>}
        </S.CheckboxContainer>
    ),
);
