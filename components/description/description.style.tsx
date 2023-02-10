import styled from "styled-components";

export const Description = styled.div`
    font-size: 13px;
    line-height: 18px;
    font-weight: 400;
    color: var(--grey);
`;

export const DescriptionWrapper = styled.div<{ mBottom?: number }>`
    margin-top: 16px;
    margin-bottom: ${({ mBottom }) => mBottom || 24}px;
`;
