import styled from "styled-components";

export const CheckBoxGroup = styled.div`
    display: flex;
    flex-direction: column;
    grid-row-gap: 16px;
`;

export const Icon = styled.div`
    position: absolute;
    top: 0;
    left: 0;
`;

export const CheckboxContainer = styled.label<{ error?: boolean }>`
    color: var(--${({ error }) => (error ? "error" : "secondary")});
    display: grid;
    grid-template-columns: 24px 1fr;
    vertical-align: middle;
    font-weight: 400;
    font-size: 13px;
    line-height: 19.5px;
    letter-spacing: -0.2px;
    cursor: pointer;
    position: relative;
    align-items: center;
    grid-column-gap: 8px;
    padding-top: 1px;

    ${({ error }) =>
        error &&
        `a { color: inherit !important; } 

        ${Icon}:before {
            border-color: inherit !important;
        }
        `}
`;

export const HiddenCheckbox = styled.input.attrs({ type: "checkbox" })`
    border: 0;
    clip: rect(0 0 0 0);
    clippath: inset(50%);
    height: 1px;
    margin: -1px;
    overflow: hidden;
    padding: 0;
    position: absolute;
    white-space: nowrap;
    width: 1px;
    outline: none;
`;

export const StyledCheckbox = styled.div<{ checked?: boolean }>`
    --borderColor: var(--greyLight);
    display: inline-block;
    width: 24px;
    height: 24px;
    position: relative;

    ${HiddenCheckbox}:checked + & {
        ${Icon} {
            &:before {
                visibility: hidden;
            }

            svg {
                visibility: visible;
            }
        }
    }

    ${Icon} {
        &:before {
            content: "";
            width: 18px;
            height: 18px;
            border-radius: 3px;
            border: 2px solid var(--borderColor);
            position: absolute;
            top: 3px;
            left: 3px;
            z-index: 1;
        }

        svg {
            visibility: hidden;
        }
    }
`;
