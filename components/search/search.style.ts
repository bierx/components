import styled from "styled-components";
import {
    Select,
    DropDownHeader,
    Chevron,
    DropDownListContainer,
} from "@/components/select";
import { SearchInput } from "@/styles/globalStyles";

export const Search = styled.div<{ active?: boolean }>`
    --width: 280px;
    border-bottom: 1px solid var(--grey);
    padding-top: 7px;
    padding-bottom: 6px;
    height: 36px;
    display: flex;
    align-items: center;
    position: relative;

    ${({ active }) => active && `border-color: var(--secondaryHover)`};
`;

export const Localization = styled(Select)`
    margin-left: 16px;

    ${DropDownHeader} {
        border: none;
        padding: 0;
        padding-right: 25px;
        display: flex;
        grid-column-gap: 10px;
    }

    ${Chevron} {
        top: 0;
    }

    ${DropDownListContainer} {
        margin-left: -42px;
    }

    ${SearchInput} {
        border-right: 0;
    }
`;

export const SearchResults = styled.div`
    background-color: var(--black);
    border: 1px solid var(--secondaryHover);
    padding-left: 34px;
    padding-top: 24px;
    padding-right: 20px;
    padding-bottom: 24px;
    position: absolute;
    left: 0;
    top: 100%;
    margin-top: 4px;
    width: calc(var(--width) + 30px);
    overflow: auto;
    max-height: 290px;
`;

export const SearchResultsLabel = styled.div`
    font-size: 15px;
    line-height: 22px;
    color: var(--secondary);
    margin-bottom: 15px;

    &:last-child {
        margin-bottom: 0;
    }

    a {
        color: var(--secondary);
        text-decoration: none;
    }
`;

export const LabelCategory = styled.div`
    font-size: 10px;
    line-height: 15px;
    display: flex;
    line-height: 14px;
    position: relative;

    &:after {
        content: "";
        position: absolute;
        left: 0;
        right: 0;
        bottom: 3px;
        background-color: rgba(137, 137, 137, 0.2);
        height: 1px;
    }
`;

export const Badge = styled.a<{ color?: string }>`
    border-radius: 23px;
    padding: 0 4px;
    margin-left: 2px;
    background: ${({ color }) => color && `var(--${color})`};

    ${({ color }) => color === "cat4" && `color: var(--black)`};
`;
