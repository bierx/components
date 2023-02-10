import styled from "styled-components";
import { Location as LocationIcon, Close } from "@/components/icons";
import {
    Select,
    Chevron,
    DropDownHeader,
    DropDownListContainer,
} from "@/components/select";

const iconBase = `
    border-radius: 50%;
    padding: 8px;
    width: 36px;
    height: 36px;
    `;

export const Location = styled(LocationIcon)`
    ${iconBase}
    border: 1px solid var(--grey);
    cursor: pointer;
`;

export const CloseIcon = styled(Close)`
    border: 1px solid var(--secondaryHover);
    ${iconBase}
`;

export const CategoriesSelect = styled(Select)`
    display: flex !important;
    align-items: center;
    grid-column-gap: 11px;
    margin-right: 35px;
    margin-left: 35px;

    ${DropDownHeader} {
        color: var(--secondary);
        border-bottom: none;
        padding-right: 25px;
        padding-bottom: 0;
    }

    ${Chevron} {
        top: 0;
    }

    ${DropDownListContainer} {
        top: 100%;
        margin-top: 5px;
    }
`;
