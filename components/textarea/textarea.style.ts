import styled from "styled-components";
import { SmallText } from "@styles/globalStyles";

export const Textarea = styled.div<{ width?: number; error?: string }>`
    ${({ width }) => width && `width: 100%; max-width: ${width}px;`}

    textarea {
        min-height: 119px;
        border: 1px solid var(--greyDark);
        padding: 16px;
        background-color: var(--dark);
        display: block;
        width: 100%;
        border-radius: 4px;
        color: var(--grey);
        font-size: 15px;
        line-height: 22.5px;
        resize: none;
        outline: none;
        font-family: "Poppins", sans-serif;

        ${({ error }) =>
            error &&
            `
                border-color: var(--error); 
                color: var(--error);
            `}

        &:focus,
        &:not(:placeholder-shown) {
            color: var(--greyLight);
            border-color: var(--green);
        }
    }
`;

export const Description = styled(SmallText)<{ error?: string }>`
    ${({ error }) => error && `color: var(--error);`}
`;
