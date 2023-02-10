import styled from "styled-components";
import { SearchInput, SearchWrapper } from "@/styles/globalStyles";
import { CheckboxContainer } from "@/components/checkbox";

export const DropDownList = styled.div`
    max-height: 200px;
    overflow: auto;
`;

export const ListItem = styled.div`
    cursor: pointer;
    border-bottom: 1px solid var(--grey);
    color: var(--secondary);
    font-size: 15px;
    line-height: 44px;
    font-weight: 400;
    text-transform: lowercase;

    &:last-child {
        border: none;
    }
`;

export const SearchOptionsWrapper = styled(SearchWrapper)`
    border-bottom: 1px solid var(--grey);
    padding-bottom: 6px;
`;

export const Search = styled(SearchInput)`
    width: 100%;
    color: var(--grey);

    ::-webkit-input-placeholder {
        color: var(--grey) !important;
    }

    :-ms-input-placeholder {
        color: var(--grey) !important;
    }

    ::placeholder {
        color: var(--grey) !important;
    }
`;

export const Label = styled.div`
    font-size: 15px;
    line-height: 22px;
    font-weight: 500;
    margin-top: 24px;
    color: var(--secondary);
    text-transform: lowercase;
`;

export const Actions = styled.div`
    padding-top: 10px;
    display: flex;
    font-size: 13px;
    line-height: 30px;
    color: var(--secondary);
    border-top: 1px solid var(--grey);

    > div {
        cursor: pointer;
    }

    > div:last-child {
        margin-left: auto;
        color: var(--primary);
    }
`;

export const DropDownListContainer = styled.div<{ multiple?: boolean }>`
    position: absolute;
    z-index: 100;
    width: 100%;
    margin-top: -1px;
    background: var(--black);
    border: 1px solid var(--secondaryHover);
    padding-left: 9px;

    ${({ multiple }) =>
        multiple &&
        `
        min-width: 300px;
        padding-left: 23px;
        padding-right: 30px;
        padding-top: 22px;
        padding-bottom: 17px;
        margin-top: 10px;

        ${DropDownList} {
            display: inline-grid;
            grid-row-gap: 7px;
            max-height: 150px;
            margin-top: 13px;
            margin-bottom: 16px;
            padding-right: 16px;
            width: calc(100% + 20px);
        }

        ${ListItem} {
            display: flex;
            align-items: center;
            font-size: 13px;
            line-height: 34px;
            border: none;
        }

        ${SearchInput} {
           margin: 0;
        }

        ${CheckboxContainer} {
            grid-template-columns: 1fr auto;
            width: 100%;
        }
    `}
`;
