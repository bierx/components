import styled from "styled-components";
import { Banner as BannerStyled } from "@/components/banner";
import { Container } from "@styles/globalStyles";

export const Wrapper = styled.div`
    border-top: 1px solid #d9d9d9;
    margin: 0 44px;
`;

export const Footer = styled.div`
    display: flex;
    padding-top: 30px;
    padding-bottom: 34px;
    grid-column-gap: 43px;
    align-items: end;
    max-width: 990px;
    margin: 0 auto;

    > * {
        margin-left: auto;
    }
`;

export const Left = styled.div`
    margin-right: 10vw;
`;

export const Banner = styled(BannerStyled)`
    padding-bottom: 60px;
    padding-left: 0;
`;

export const ImageWrapper = styled.div<{ img?: string }>`
    background-image: url(${({ img }) => img});
    background-repeat: no-repeat;
    background-position: bottom;
    background-size: cover;

    ${Container} {
        padding-left: 0;
    }
`;

export const Divider = styled.div`
    max-width 990px;
    margin: 0 auto;
    height: 1px;
    background: rgba(235, 235, 235, 0.5);

`;
