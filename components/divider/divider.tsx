import React, { FC } from "react";

import * as S from "./divider.style";

export interface DividerProps {
    children?: React.ReactNode;
    width?: number;
}

export const Divider: FC<DividerProps> = ({ children, width }) => (
    <S.Container width={width}>
        <S.Divider>{children}</S.Divider>
    </S.Container>
);
