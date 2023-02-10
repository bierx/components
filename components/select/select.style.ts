import styled from "styled-components";

import { SelectProps } from "./select.types";
import { Tooltip } from "@styles/globalStyles";

export const Icon = styled.div`
    display: block;
    position: absolute;
    top: 6px;
    left: 100%;
    margin-left: 5px;
`;
export const ExtraIcon = styled.div`
    display: grid;
    align-items: center;
    cursor: pointer;
`;

export const Wrapper = styled.div<{
    error?: SelectProps["error"];
    isFilled?: boolean;
    width?: number;
    disabled?: boolean;
}>`
    ${({ error, isFilled }) => {
        const focusColor = `var(--${isFilled ? "secondary" : "green"})`;
        const fontColor = `var(--${isFilled ? "secondary" : "greyLight"})`;
        const focusBorderColor = `var(--${
            isFilled ? "secondary" : "secondaryHover"
        })`;
        return error
            ? `
            --color: var(--error);
            --focusColor: var(--error);
            --focusBorderColor: var(--error);
            --sampleTextError: var(--error);
            
             ${SmallText} {
                color: var(--sampleTextError) !important;
            }
            `
            : `
            --color: ${fontColor};
            --focusColor: ${focusColor};
            --focusBorderColor: ${focusBorderColor};
             --sampleTextError: var(--greyLight);
            `;
    }};
    ${({ width }) => width && `max-width: ${width}px; width: 100%;`}
    ${({ disabled }) => disabled && `pointer-events: none; opacity: 0.3;`}
    position: relative;
    display: block;
`;

export const SmallText = styled.div`
    font-size: 10px;
    font-weight: 400;
    line-height: 15px;
    color: var(--sampleTextError);
`;

export const InputWrapper = styled.div`
    margin-bottom: 24px;
`;

export const DropDownHeader = styled.div<{
    highlight?: boolean;
    isFilled?: boolean;
}>`
    font-weight: 500;
    font-size: 15px;
    line-height: 22px;
    color: var(--color);
    ${({ highlight }) =>
        highlight &&
        "color: var(--secondaryHover) !important; svg path {fill: var(--secondaryHover)};"}
    border: none;
    border-bottom: 1px solid
        var(--${({ isFilled }) => (isFilled ? `secondaryHover` : `color`)});
    background-color: transparent;
    border-radius: 0;
    outline: none;
    padding-bottom: 10px;
    width: 100%;
    position: relative;
    cursor: pointer;
    user-select: none;

    &[disabled] {
        color: var(--grey);
        border-color: var(--grey);
    }
`;

export const Chevron = styled.div`
    position: absolute;
    top: 4px;
    right: 0;
    height: 20px;
    pointer-events: none;
`;

export const Counter = styled.div<{ hidden?: boolean }>`
    font-size: 15px;
    line-height: 22.5px;
    font-weight: 500;
    width: 20px;
    height: 20px;
    display: flex;
    align-items: center;
    justify-content: center;
    background-color: var(--black);
    ${({ hidden }) => hidden && `opacity: 0; visibility: hidden;`}
`;

export const TooltipIcon = styled(Icon)`
    margin-left: 17px !important;

    ${Tooltip}:before {
        max-width: 126px;
    }
`;
