import React, { ReactNode } from "react";

export const BUTTON_VARIANT = {
    DEFAULT: "default",
    OUTLINED: "outlined",
} as const;

export const SIZE = {
    TINY: "tiny",
    SMALL: "small",
    MEDIUM: "medium",
    LARGE: "large",
} as const;

export type SIZE = typeof SIZE[keyof typeof SIZE];

export type BUTTON_VARIANT = typeof BUTTON_VARIANT[keyof typeof BUTTON_VARIANT];

export interface ButtonProps extends React.ButtonHTMLAttributes<HTMLElement> {
    children?: ReactNode;
    /**
     * The variant to use
     */
    variant?: BUTTON_VARIANT;
    /**
     * Button's size
     */
    size?: SIZE;
    /**
     * When `true` button's width is set to 100%
     */
    block?: boolean;
    className?: string;
    width?: number;
    rounded?: boolean;
}
