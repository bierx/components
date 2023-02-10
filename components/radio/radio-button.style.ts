import styled from "styled-components";
import { RADIO_BUTTON_VARIANT } from "@components/radio/radio-button.types";

export const Container = styled.label`
    padding: 8px;
    border-radius: 4px;
    border: 1px solid var(--black);
    display: grid;
    grid-template-columns: 24px auto;
    grid-column-gap: 10px;
    font-size: 15px;
    font-weight: 500;
    line-height: 22px;
    color: var(--secondary);
    user-select: none;
    cursor: pointer;
    position: relative;
    background-color: var(--black);
    width: 100%;
`;

export const CheckMark = styled.span`
    height: 20px;
    width: 20px;
    border: 2px solid var(--grey);
    border-radius: 50%;
    transition: all 0.1s ease;
`;

export const Input = styled.input`
    position: absolute;
    opacity: 0;
    cursor: pointer;

    &:checked ~ ${CheckMark} {
        background-color: var(--black);
        border-color: var(--secondaryHover);
        border-width: 5px;

        &:before {
            content: "";
            position: absolute;
            pointer-events: none;
            inset: 0;
            border: 1px solid var(--secondaryHover);
            z-index: 1;
            border-radius: 4px;
        }
    }
`;

export const Children = styled.div`
    margin-left: auto;
    display: inline-flex;
`;

export const Bg = styled.span`
    position: absolute;
    inset: 0;
    pointer-events: none;
    border-radius: 4px;
`;

export const InputsWrapper = styled.div<{ variant?: RADIO_BUTTON_VARIANT }>`
    display: flex;
    grid-column-gap: 17px;
    grid-row-gap: 10px;

    ${({ variant }) =>
        variant === "block" &&
        `display: grid; 
            
            ${Children} {
                z-index: 1;
                position: relative;
             }
             
             ${CheckMark} {
                z-index: 1;
             }
        
            ${Container} { 
                grid-template-columns: 24px auto 25%;
                padding-right: 24px;
                align-items: center;
                background-color: var(--dark);
                border-color: var(--greyDark);
            }
            
            ${Input} {
              &:checked ~ ${Bg} {
                  background-color: var(--black);
              }
            }
        `}
`;

export const SmallLabel = styled.div`
    font-size: 10px;
    line-height: 15px;
    color: var(--grey);
    margin-bottom: 4px;
    text-transform: capitalize;
`;

export const Label = styled.span`
    position: relative;
    z-index: 1;
`;
