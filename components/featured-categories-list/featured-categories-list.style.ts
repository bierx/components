import styled from "styled-components";

export const Category = styled.div`
    width: 225px;
    height: 303px;
    border: 1px solid var(--primary);
    color: var(--secondary);
    display: inline-flex !important;
    align-items: center;
    justify-content: center;
    font-size: 24px;
    line-height: 36px;
    font-weight: 600;
    cursor: pointer;
    white-space: break-spaces;
    text-align: center;
    padding: 0 20px;
    background: var(--dark);
    box-shadow: 8px 8px 0 0 var(--black);
    margin-bottom: 8px;
    margin-right: 29px !important;
    position: relative;

    &::after {
        content: "";
        width: 48px;
        height: 1px;
        background: var(--secondary);
        opacity: 0.5;
        position: absolute;
        bottom: 98px;
    }
`;
