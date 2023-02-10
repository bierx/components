import { LinkProps } from "./link";
import styled from "styled-components";

export const Link = styled.a<Partial<LinkProps>>`
    color: var(--${({ highligh }) => (highligh ? "primary" : "secondary")});
    font-weight: 400;
    font-size: 13px;
    line-height: 24px;
    text-decoration-line: ${({ underline }) =>
        underline ? "underline" : "none"};
`;
