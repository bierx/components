import styled from "styled-components";
import { prepareVariables } from "./button.utils";
import { ButtonProps } from "./button.types";

export const Button = styled.button<ButtonProps>`
    ${(props) => prepareVariables(props)};
    font-size: var(--fontSize);
    line-height: var(--lineHeight);
    font-weight: var(--fontWeight);
    width: var(--width);
    border: var(--border);
    background-color: var(--defaultBgColor);
    color: var(--defaultTextColor);
    padding: 0 25px;
    display: inline-flex;
    outline: none;
    border-radius: 24px;
    justify-content: center;
    align-items: center;
    white-space: nowrap;
    font-family: "Poppins", sans-serif;
    border-radius: var(--radius);
    ${({ width }) => width && `min-width: ${width}px;`}
    ${({ rounded }) => rounded && `border-radius: 50%; padding: 0;`}

    &:hover:not([disabled]) {
        cursor: pointer;
    }

    &:hover,
    &:active {
        background-color: var(--hoverBgColor);
        color: var(--hoverTextColor);
    }

    &[disabled] {
        background-color: var(--disabledBgColor);
        color: var(--disabledTextColor);
    }
`;
