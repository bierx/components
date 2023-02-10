import styled from "styled-components";

export const HorizontalMenu = styled.div`
    display: flex;
    border-bottom: 1px solid var(--grey);
    padding-bottom: 13px;
    margin-top: 30px;
    margin-bottom: 16px;
    grid-column-gap: 44px;
`;

export const MenuItem = styled.a<{ active?: boolean }>`
    text-decoration: none;
    color: var(--grey);
    font-size: 15px;
    line-height: 24px;
    position: relative;

    &:after {
        content: "";
        position: absolute;
        top: 100%;
        margin-top: 12px;
        height: 3px;
        background-color: var(--primary);
        transition: all 0.3s ease;
        width: 0;
        margin-left: auto;
        margin-right: auto;
        left: 0;
        right: 0;
    }

    ${({ active }) =>
        active &&
        `
        color: var(--primary);

        &:after {
            width: 100%;
        }
    `}

    &:hover {
        color: var(--secondary);

        &:after {
            width: 100%;
        }
    }
`;
