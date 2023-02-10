import styled from "styled-components";
import { Typography } from "@components/typography";
import { Badge, Tooltip, SmallText } from "@styles/globalStyles";
import { STATUS, statuses } from "@components/negotiations/item/item.utils";
import { Button } from "@components/button/button.style";

export const Item = styled.div`
    display: grid;
    grid-template-columns: 54px 236px auto auto 107px 20px;
    grid-column-gap: 16px;
    font-size: 15px;
    line-height: 24px;
    font-weight: 500;
    letter-spacing: -0.003em;
    color: var(--secondary);
    align-items: center;
`;

export const ItemWrapper = styled.div<{ active?: boolean }>`
    padding: 16px;
    border: 1px solid var(--greyDark);
    border-radius: 16px;

    ${({ active }) =>
        active &&
        `border-color: var(--primary); background-color: var(--black);`}
`;

export const Actions = styled.div`
    display: flex;
    grid-column-gap: 16px;
    margin-left: auto;

    ${Button} {
        padding: 0;
    }
`;

export const Price = styled.div`
    color: var(--greyLight);
    font-weight: 400 !important;
    text-decoration-line: line-through;
    margin-left: 32px;
    font-size: 15px;
    line-height: 22.5px;
    white-space: nowrap;
`;

export const NewPrice = styled(Typography)`
    color: var(--primary);
    white-space: nowrap;
`;

export const Status = styled(Badge)<{ status?: STATUS }>`
    display: inline-flex;
    user-select: none;
    ${({ status }) => status && statuses.get(status)}
`;

export const Hint = styled(Tooltip)`
    display: inline-flex;
    cursor: pointer;
    user-select: none;

    &:before {
        white-space: nowrap;
        width: auto;
    }
`;

export const History = styled.div`
    margin-top: 24px;
    padding-left: 70px;
    padding-bottom: 7px;
    padding-right: 20px;
`;

export const HistoryItem = styled.div`
    font-size: 15px;
    line-height: 18px;
    color: var(--secondary);
    padding: 8px 0;
    border-bottom: 1px solid var(--dark);
    display: grid;
    grid-template-columns: 70px 120px 140px auto;
    align-items: center;

    &:last-child {
        border: none;
    }

    ${SmallText} {
        color: var(--secondary);
    }

    ${Price} {
        margin-left: 0;
    }
`;

export const LimitedOffer = styled.div`
    font-size: 13px;
    line-height: 18px;
    min-width: 109px;
    font-weight: 400;
    margin-right: -12px;
    display: inline-grid;
`;

export const Time = styled.span`
    white-space: nowrap;
`;
