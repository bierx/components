import styled from "styled-components";

export const InputNumber = styled.div`
    border: 1px solid var(--greyDark);
    padding: 8px;
    width: 109px;
    height: 40px;
    display: grid;
    grid-template-columns: 24px auto 24px;
    border-radius: 45px;
    align-content: center;
    user-select: none;
    -moz-user-select: none;
    -webkit-user-select: none;
    -ms-user-select: none;
    background-color: var(--black);
`;

export const Button = styled.div`
    cursor: pointer;
    height: 24px;
`;

export const Number = styled.div`
    color: var(--secondary);
    font-size: 15px;
    font-weight: 400;
    line-height: 24px;
    text-align: center;
    height: 24px;

    + svg {
        path {
            fill: var(--primary);
        }
    }
`;
