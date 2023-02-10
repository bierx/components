import styled, { css } from "styled-components";
import { INPUT_VARIANT, InputProps } from "./input.types";

export const Icon = styled.div`
    display: block;
    position: absolute;
    top: 6px;
    left: 100%;
    margin-left: 5px;
`;

export const TooltipIcon = styled(Icon)`
    margin-left: -20px !important;
`;

export const Label = styled.label<{ asPlaceholder?: boolean }>`
    font-weight: 500;
    font-size: 15px;
    line-height: 22px;
    color: var(--color);
    position: absolute;
    left: 0;
    top: 0;
    pointer-events: none;
    transition: all 0.3s ease;

    ${({ asPlaceholder }) =>
        asPlaceholder && `color: var(--greyLight) !important`}
`;

export const LabelWrapper = styled.div`
    display: flex;
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    pointer-events: none;
`;

export const Input = styled.input<
    Omit<InputProps, "label" | "validatePassword">
>`
    font-weight: 500;
    font-size: 15px;
    line-height: 22px;
    color: var(--secondary);
    border: none;
    border-bottom: 1px solid var(--color);
    background-color: transparent;
    border-radius: 0;
    outline: none;
    padding-bottom: 10px;
    width: 100%;
    font-family: "Poppins", sans-serif;
    ${({ width }) => width && `max-width: ${width}px; width: 100%;`}
    ${({ withIcon }) => withIcon && `padding-left: 36px !important;`}

    &[disabled] {
        color: var(--grey);
        border-color: var(--grey);

        + ${LabelWrapper} > ${Label} {
            color: var(--grey);
        }
    }

    &[type="number"] {
        &::-webkit-outer-spin-button,
        &::-webkit-inner-spin-button {
            -webkit-appearance: none;
            margin: 0;
        }
        -moz-appearance: textfield;
    }

    &:focus,
    &:not(:placeholder-shown) {
        border-color: var(--focusBorderColor);

        + ${LabelWrapper} > ${Label} {
            font-size: 10px;
            line-height: 15px;
            font-weight: 400;
            color: var(--focusColor);
            top: -15px;
            ${({ asPlaceholder }) =>
                asPlaceholder &&
                `opacity: 0; transition: none; position: static;`}
        }
    }

    &:-webkit-autofill {
        -webkit-box-shadow: 0 0 0px 1000px var(--dark) inset;
    }

    -webkit-text-fill-color: var(--secondary) !important;
`;

export const SmallText = styled.div<{ withIcon?: boolean }>`
    font-size: 10px;
    font-weight: 400;
    line-height: 15px;
    color: var(--sampleTextError);
    ${({ withIcon }) => withIcon && `position: absolute;`}
`;

export const SmallDesc = styled.div`
    color: var(--grey);
    margin-left: auto;
`;

export const Wrapper = styled.div<{
    error?: InputProps["error"];
    isFilled: boolean;
    type?: string;
    width?: number;
    variant?: INPUT_VARIANT;
    smallText?: boolean;
}>`
    ${({ error, isFilled }) => {
        const focusColor = `var(--${isFilled ? "grey" : "green"})`;
        const focusBorderColor = `var(--${
            isFilled ? "secondary" : "secondaryHover"
        })`;
        return error
            ? `
            --color: var(--error);
            --focusColor: var(--error);
            --focusBorderColor: var(--error);
            --sampleTextError: var(--error);
            
            ${SmallText}, ${Label} {
                color: var(--sampleTextError) !important;
            }
            ${Input} {
                border-color: var(--sampleTextError) !important;
            }
            `
            : `
            --color: var(--greyLight);
            --focusColor: ${focusColor};
            --focusBorderColor: ${focusBorderColor};
             --sampleTextError: var(--greyLight);
            `;
    }};
    position: relative;
    display: block;
    ${({ type }) => type === "hidden" && "visibility: hidden"};
    ${({ width }) => width && `max-width: ${width}px; width: 100%;`}

    ${({ variant, smallText }) =>
        variant === INPUT_VARIANT.OUTLINED &&
        `
        padding-top: 15px;
        ${SmallDesc} {
            margin-top: 23px;
            margin-right: 9px;
            color: var(--secondary);
        }
        
        ${Input} {
            border: 1px solid var(--greyDark);
            border-radius: 4px;
            padding: 8px;
         
            &:focus, &:not(:placeholder-shown) {
                border-color: var(--green)
            }
            
            + ${LabelWrapper} > ${Label} {
               font-size: 10px;
               line-height: 15px;
               font-weight: 400;
               color: var(--grey);
               top: 0;
            }
            
             ${smallText && `padding-right: 35px; text-align: right;`}
        `}
`;

export const InputWrapper = styled.div<{
    grid?: [string, string];
    gap?: string;
    marginB?: string;
}>`
    margin-bottom: ${({ marginB }) => marginB || 24}px;

    ${({ grid, gap }) =>
        grid &&
        `display: grid; grid-column-gap: 16px; grid-template-columns: ${grid.join(
            " ",
        )};
        
        ${gap && `grid-column-gap: ${gap};`}

        `}

    &:empty {
        display: none;
    }
`;

export const PasswordToggle = styled.div`
    display: block;
    position: absolute;
    top: 2px;
    left: calc(100% - 24px);
    cursor: pointer;
`;

export const ValidatePasswordWrapper = styled.div`
    display: flex;
    flex-direction: column;
    width: 100%;
    position: relative;
`;

export const ValidatorIndicators = styled.div`
    display: flex;
    align-items: center;
    width: 100%;
    margin-top: 8px;
    margin-bottom: 3px;
`;

export const ProgressBar = styled.div`
    display: flex;
    width: 100%;
    grid-column-gap: 2px;
`;

const barCommonStyled = css`
    display: flex;
    border-bottom: 4px solid var(--success);
    width: 25%;
`;

export const BarDarkRed = styled.div`
    ${barCommonStyled};
    border-color: var(--success);
`;

export const BarRed = styled.div<{ hasColor: boolean | undefined }>`
    ${barCommonStyled};
    opacity: ${({ hasColor }) => (!hasColor ? "0.8" : "1")};
`;

export const BarLightRed = styled.div<{ hasColor: boolean | undefined }>`
    ${barCommonStyled};
    opacity: ${({ hasColor }) => (!hasColor ? "0.5" : "1")};
`;

export const BarDarkGreen = styled.div<{ hasColor: boolean | undefined }>`
    ${barCommonStyled};
    opacity: ${({ hasColor }) => (!hasColor ? "0.3" : "1")};
`;

export const ErrorsList = styled.div`
    display: flex;
    width: 100%;
`;

export const Error = styled.div<{ isRuleMet: boolean | undefined }>`
    font-size: 10px;
    line-height: 15px;
    color: var(--greyLight);
    display: inline-block;
    position: relative;
    padding-right: 10px;
    margin-right: 6px;
    color: var(--${({ isRuleMet }) => (isRuleMet ? "success" : "greyLight")});

    &:after {
        content: "";
        display: block;
        position: absolute;
        top: 50%;
        right: 0px;
        width: 4px;
        height: 4px;
        border-radius: 50%;
        background-color: var(--greyLight);
        transform: translate(0, -50%);
    }

    &:last-child {
        &:after {
            display: none;
        }
    }
`;

export const LeftIcon = styled.div`
    position: absolute;
    left: 8px;
    bottom: 8px;
    align-items: center;
    display: flex;
`;
