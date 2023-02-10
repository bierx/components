import React, { ReactNode } from "react";

export const RADIO_BUTTON_VARIANT = {
    DEFAULT: "default",
    BLOCK: "block",
} as const;

export type RADIO_BUTTON_VARIANT =
    typeof RADIO_BUTTON_VARIANT[keyof typeof RADIO_BUTTON_VARIANT];

export interface RadioButtonProps
    extends React.InputHTMLAttributes<HTMLElement> {
    children?: ReactNode;
    /**
     * The variant to use
     */
    variant?: RADIO_BUTTON_VARIANT;
    /**
     * The input label
     */
    label: string | ReactNode;
    /**
     * The input error
     */
    error?: string;
    /**
     * The input name
     */
    name: string;
}
