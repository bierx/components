import styled from "styled-components";
import { DynamicComponent } from "@/components/dynamic-component";
import { getSize } from "./typography.utils";
import { TypographyProps } from "./typography";
import { DescriptionWrapper } from "@/components/description/description.style";

export const Typography = styled(DynamicComponent)<TypographyProps>`
    color: var(--secondary);
    margin: 0;
    ${({ size }) => getSize(size)}
    ${({ counter }) =>
        counter &&
        `
        + ${DescriptionWrapper} {
            padding-left: 34px;
        }
        
        
        &:before {
            content: "${counter}";
            width: 18px;
            height: 18px;
            background: var(--primary);
            border-radius: 50%;
            font-weight: 700;
            font-size: 15px;
            line-height: 18px;
            align-items: center;
            justify-content: center;
            color: var(--black);
            margin-right: 16px;
            display: inline-flex;
            margin-top: 5px;
            vertical-align: top;
        }
    `}
`;
