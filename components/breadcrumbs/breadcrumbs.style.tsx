import styled from "styled-components";

export const Breadcrumbs = styled.div`
    display: flex;
    margin-bottom: 13px;
`;

export const Crumb = styled.a<{ last?: boolean }>`
    font-size: 10px;
    line-height: 21px;
    color: var(--grey);
    padding-right: 5px;
    text-decoration: none;

    &:after {
        content: "/";
        margin-left: 5px;
        color: var(--greyLight);
    }

    ${({ last }) =>
        last &&
        `
        color: var(--secondary);
        
        &:after {
            content: "";
        } 
    `}
`;
