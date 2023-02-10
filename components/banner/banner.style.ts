import styled from "styled-components";

import { BannerProps } from "./banner";
import { Container } from "@styles/globalStyles";

export const Desc = styled.div`
    font-size: 18px;
    line-height: 40px;
    font-weight: 500;
    color: var(--secondary);
    margin-bottom: 16px;
    margin-top: 44px;
`;

export const Banner = styled.div<Partial<BannerProps>>`
    padding-top: 189px;
    padding-bottom: 183px;
    ${({ bg }) =>
        bg &&
        `background-image: url(${bg}); background-size: cover; background-position: bottom`};

    ${Container} {
        padding-left: 0;
    }
`;

export const Inner = styled.div`
    max-width: 990px;
    width: 100%;
    margin: 0 auto;
`;
