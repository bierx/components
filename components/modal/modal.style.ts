import styled from "styled-components";
import { ModalProps } from "./modal.types";

export const Outer = styled.div<{ verticalCenter?: boolean }>`
    position: fixed;
    inset: 0;
    height: 100vh;
    width: 100vw;
    display: flex;
    align-items: flex-start;
    justify-content: center;
    background: rgba(0, 0, 0, 0.5);
    overflow: auto;
    padding-top: 68px;
    z-index: 999;

    @supports (-webkit-backdrop-filter: none) or (backdrop-filter: none) {
        -webkit-backdrop-filter: blur(5px);
        backdrop-filter: blur(5px);
    }

    /* slightly transparent fallback for Firefox (not supporting backdrop-filter) */
    @supports not ((-webkit-backdrop-filter: none) or (backdrop-filter: none)) {
        background: rgba(0, 0, 0, 0.97);
    }

    ${({ verticalCenter }) =>
        verticalCenter && `align-items: center; padding-top: 0;`}
`;

export const Inner = styled.div<
    Pick<ModalProps, "width" | "height" | "center">
>`
    background-color: var(--dark);
    padding-top: 48px;
    padding-bottom: 62px;
    padding-left: 45px;
    padding-right: 45px;
    position: relative;
    max-width: ${({ width }) => width}px;
    width: 100vw;
    min-height: ${({ height }) => height}px;

    ${({ center }) =>
        center &&
        `display:grid; align-content: center; justify-items: center; text-align: center;`}
`;

export const Close = styled.div`
    position: absolute;
    top: 20px;
    right: 20px;
    cursor: pointer;
    text-decoration: none;
`;

export const Overlay = styled.div`
    max-height: 100vh;
    overflow: auto;
    width: 100vw;
    display: grid;
    justify-content: center;
`;
