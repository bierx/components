import styled from "styled-components";
import { Button as ButtonStyled } from "@/components/button";
import { Typography } from "@/components/typography";

export const InitialNegotiations = styled.div`
    color: var(--secondary);
    padding: 0 30px;
    white-space: break-spaces;
`;

export const Product = styled.div`
    display: grid;
    grid-column-gap: 16px;
    grid-template-columns: 54px 1fr;
    font-size: 18px;
    line-height: 27px;
    font-weight: 500;
    letter-spacing: -0.003em;
    margin: 44px 0;
`;

export const Price = styled.div`
    font-weight: 600;
    font-size: 34px;
    line-height: 51px;
    text-align: center;
`;

export const Button = styled(ButtonStyled)`
    margin-top: 20px;
`;

export const PriceLabel = styled(Typography)`
    color: var(--grey);
    text-align: center;
    margin-bottom: 44px;
`;
