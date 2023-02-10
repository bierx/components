import styled from "styled-components";
import { ScrollableList } from "@/components/scrollable-list";

export const Category = styled.div<{ bg?: string; color?: string }>`
    --color: ${({ color }) => (color ? color : `var(--secondary)`)};
    width: 233px;
    height: 311px;
    color: var(--color);
    ${({ bg }) => bg && `background: ${bg};`};
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    font-size: 24px;
    line-height: 36px;
    font-weight: 600;
    cursor: pointer;
`;

export const Categories = styled(ScrollableList)`
    ${Category} {
        display: inline-flex;
    }
`;

export const Icon = styled.div`
    padding: 16px;
    margin-top: 44px;
    text-align: center;
    position: relative;

    svg path {
        fill: var(--color);
    }

    &:before {
        content: "";
        color: inherit;
        position: absolute;
        top: 0;
        width: 48px;
        left: 50%;
        transform: translate(-50%, 0);
        border-top: 1px solid;
        opacity: 0.5;
    }
`;
