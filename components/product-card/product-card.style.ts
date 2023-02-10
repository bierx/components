import styled from "styled-components";
import { Typography } from "@/components/typography";

export const AddToFavorites = styled.div<{ active?: boolean }>`
    position: absolute;
    left: 8px;
    top: 8px;
    z-index: 9;
    ${({ active }) =>
        active && `svg circle { fill: var(--secondaryHover); fill-opacity: 1;}`}
`;

export const Label = styled(Typography)`
    line-height: 18px;
    margin-top: 10px;
`;

export const Price = styled.div`
    font-weight: 600;
    font-size: 15px;
    line-height: 22.5px;
    color: var(--secondary);
`;

export const ProductInfo = styled.div<{ image?: string }>`
    width: 289px;
    height: 429px;

    padding-top: 156px;
    padding-left: 20px;
    padding-right: 20px;
    padding-bottom: 12px;
    position: relative;
    z-index: 7;
    ${({ image }) =>
        image && `background-image: url(${image}); background-size: cover;`};

    ${Label} {
        font-weight: 600;
    }

    ${AddToFavorites} {
        top: 35px;
        left: 35px;
    }

    &:before {
        content: "";
        inset: 0;
        position: absolute;
        background: linear-gradient(
            180deg,
            rgba(20, 20, 20, 0.9) 0%,
            rgba(11, 11, 11, 0.8) 44.98%,
            rgba(4, 4, 4, 0.6) 69.46%,
            rgba(0, 0, 0, 0.4) 100%
        );
        transform: rotate(-180deg);
        z-index: -1;
    }
`;

export const Card = styled.a<{ bg?: string }>`
    width: 233px;
    cursor: pointer;
    position: relative;
`;

export const CtaWrapper = styled.div<{ withNegotiation?: boolean }>`
    padding-bottom: 8px;
    border-bottom: 1px solid var(--grey);
    margin-bottom: 4px;
    margin-top: 6px;
    display: grid;
    grid-template-columns: 1fr 42px;
    grid-column-gap: 8px;
    grid-row-gap: 4px;

    ${({ withNegotiation }) =>
        withNegotiation &&
        `
        button:first-of-type {
            grid-column-start: 1;
            grid-column-end: 3;
        }
    `}
`;

const baseLabelStyle = `
    font-size: 10px;
    line-height: 21px;
    font-weight: 600;
`;

export const Weight = styled.div`
    ${baseLabelStyle}
    color: var(--secondary);
    text-align: right;
`;

export const Sizes = styled.ul`
    list-style-type: none;
    padding: 0;
    margin: 0;
    margin-bottom: 4px;
    margin-top: 12px;
`;

export const Size = styled.li`
    ${baseLabelStyle}
    display: flex;
    grid-column-gap: 10px;
    color: var(--primary);
`;

export const SizeType = styled.div`
    width: 50px;
`;

export const Location = styled.div`
    font-size: 10px;
    line-height: 15px;
    color: var(--secondary);
    text-transform: uppercase;
    display: flex;
    align-items: center;
    grid-column-gap: 4px;
`;

export const Header = styled.div`
    border-bottom: 1px solid var(--grey);
    margin-bottom: 8px;
    display: flex;
    align-items: center;

    ${Price} {
        margin-left: auto;
    }
`;

export const Category = styled.div`
    font-size: 10px;
    line-height: 15px;
    color: var(--secondary);
    text-transform: uppercase;
`;

export const AddToFavoritesWrapper = styled.div<{ active?: boolean }>`
    display: flex;
    align-items: center;
    justify-content: center;
    height: 42px;
    ${({ active }) =>
        active && `svg path { fill: var(--secondaryHover); fill-opacity: 1;}`}
`;
