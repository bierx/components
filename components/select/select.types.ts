import React, { ReactNode } from "react";

export interface SelectProps extends React.InputHTMLAttributes<HTMLElement> {
    children?: ReactNode;
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
    name?: string;
    /**
     * The input onchange callback
     */
    callback?: (value: string) => void;
    /**
     * Select options
     */
    options?: Options[];
    /**
     * Show/Hide validation icons
     */
    showIcons?: boolean;
    /**
     * Callback function on show/hide options
     */
    onStateChange?: (state: boolean) => void;
    /**
     * Highlight label
     */
    highlight?: boolean;
    /**
     * Placeholder for search input
     */
    searchPlaceholder?: string;
    /**
     * Label for search input
     */
    searchLabel?: string;
    /**
     * Is default open
     */
    open?: boolean;
    /**
     * Select width
     */
    width?: number;
    /**
     * Text for tooltip
     */
    tooltip?: string;
    /**
     * Return data in array
     */
    array?: boolean;
}
