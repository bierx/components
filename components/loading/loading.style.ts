import styled, { keyframes } from "styled-components";

const spin = keyframes`
  0% {
    transform: rotate(0deg);
  }
  100% {
    transform: rotate(360deg);
  }
`;

export const Loading = styled.div<{ size?: number; borderSize?: number }>`
    color: var(--primmary);
    font-size: 28px;
    border: ${({ borderSize }) => borderSize || 3}px solid var(--grey);
    border-top: ${({ borderSize }) => borderSize || 3}px solid var(--primary);
    border-radius: 50%;
    width: ${({ size }) => size || 40}px;
    height: ${({ size }) => size || 40}px;
    animation: ${spin} 1s linear infinite;
    margin: 0 auto;
`;
