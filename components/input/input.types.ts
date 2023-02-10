import { ValidatePassword } from "@/utils/getPasswordValidation";
import React, { ReactNode } from "react";

export const INPUT_VARIANT = {
    DEFAULT: "default",
    ICON: "icon",
    PASSWORD: "password",
    OUTLINED: "outlined",
} as const;

export type INPUT_VARIANT = typeof INPUT_VARIANT[keyof typeof INPUT_VARIANT];

export interface InputProps extends React.InputHTMLAttributes<HTMLElement> {
    children?: ReactNode;
    /**
     * The variant to use
     */
    variant?: INPUT_VARIANT;
    /**
     * The input label
     */
    label?: string;
    /**
     * Is the input required true/false
     */
    required?: boolean;
    /**
     * The input error
     */
    error?: string;
    /**
     * The input sample text
     */
    text?: string;
    /**
     * The input name
     */
    name: string;
    /**
     * The input onchange callback
     */
    onChange?: (event: React.ChangeEvent<HTMLInputElement>) => void;
    /**
     * Validate password resolver
     */
    validatePassword?: ValidatePassword;
    /**
     * Password value
     */
    passwordText?: string;
    /**
     * Text for tooltip
     */
    tooltip?: string;
    /**
     * show/hide validation icons
     */
    showIcons?: boolean;
    /**
     * show label as placeholder
     */
    asPlaceholder?: boolean;
    /**
     * small text from right side
     */
    smallText?: string;
    /**
     * Input width
     */
    width?: number;
    /**
     * Input icon
     */
    icon?: ReactNode;
    withIcon?: boolean;
}
