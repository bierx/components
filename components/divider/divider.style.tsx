import styled from "styled-components";

import { DividerProps } from "./divider";

export const Divider = styled.div`
    background-color: var(--dark);
    padding: 0 8px;
    font-size: 13px;
    line-height: 24px;
    font-weight: 400;
    position: relative;
    z-index: 1;
    display: inline-block;
`;

export const Container = styled.div<Partial<DividerProps>>`
    text-align: center;
    color: var(--secondary);
    background-color: var(--dark);
    position: relative;
    padding: 29px;
    ${({ width }) => width && `max-width: ${width}px; margin: 0 auto;`}

    &:before {
        content: "";
        height: 1px;
        background-color: var(--grey);
        left: 0;
        right: 0;
        top: 50%;
        transform: translate(0, -50%);
        position: absolute;
    }
`;
