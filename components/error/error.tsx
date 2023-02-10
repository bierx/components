import { FC } from "react";
import * as S from "./error.style";

interface ErrorProps {
    children?: React.ReactNode;
}

export const Error: FC<ErrorProps> = ({ children }) => (
    <S.Error>{children}</S.Error>
);
