import styled from "styled-components";

export const Outer = styled.div`
    position: fixed;
    inset: 0;
    height: 100vh;
    width: 100vw;
    display: flex;
    align-items: flex-start;
    justify-content: center;
    backdrop-filter: blur(5px);
    background: rgba(0, 0, 0, 0.5);
    overflow: auto;
    padding-top: 68px;
    z-index: 8;
`;

export const Modal = styled.div`
    background-color: var(--black);
    position: fixed;
    top: 0;
    left: 0;
    right: 0;
    padding-top: 114px;
    padding-bottom: 46px;
    box-shadow: 0px 23px 39px rgba(0, 0, 0, 0.25);
    z-index: 8;
`;

export const Categories = styled.div`
    padding-left: 197px;
    display: grid;
    grid-template-columns: 1fr 1fr 1fr;
`;

export const Category = styled.div<{ bg?: string; color?: string }>`
    font-size: 15px;
    line-height: 44px;
    color: var(--secondary);
    display: inline-flex;
    grid-column-gap: 18px;
    align-items: center;
    cursor: pointer;
    border-radius: 31px;
    padding: 0 9px;
    min-width: 194px;

    svg path {
        fill: var(--secondary);
    }

    &:hover {
        ${({ bg }) => bg && `background-color: ${bg};`};
        ${({ color }) =>
            color && `color: ${color}; svg path {fill: ${color};}`};
    }
`;

export const SubCategories = styled.div`
    border-left: 1px solid var(--grey);
    padding-left: 23px;

    ${Category} {
        padding: 0;
    }
`;

export const CategoryHeader = styled.div`
    font-size: 13px;
    line-height: 32px;
    color: var(--secondaryHover);
`;
