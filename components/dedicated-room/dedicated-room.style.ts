import styled from "styled-components";
import { ScrollableList } from "@/components/scrollable-list";

export const Label = styled.div`
    position: relative;
    z-index: 1;
`;

export const Category = styled.div<{ bg?: string }>`
    width: 233px;
    height: 311px;
    color: var(--secondary);
    ${({ bg }) =>
        bg && `background-image: url(${bg}); background-size: cover;`};
    display: flex;
    align-items: center;
    justify-content: end;
    flex-direction: column;
    font-size: 24px;
    line-height: 36px;
    font-weight: 600;
    padding-top: 92px;
    cursor: pointer;
    position: relative;

    &:after {
        content: "";
        position: absolute;
        top: 106px;
        bottom: 0;
        left: 0;
        right: 0;
        background: linear-gradient(
            180deg,
            rgba(20, 20, 20, 0.9) 0%,
            rgba(11, 11, 11, 0.8) 35.61%,
            rgba(4, 4, 4, 0.4) 68.94%,
            rgba(0, 0, 0, 0) 100%
        );
        z-index: 0;
        transform: rotate(-180deg);
    }
`;

export const Categories = styled(ScrollableList)`
    ${Category} {
        display: inline-flex;
    }
`;

export const Divider = styled.div`
    margin-top: 26px;
    margin-bottom: 44px;
    position: relative;
    z-index: 1;

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
