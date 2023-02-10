import React, { FC } from "react";

import * as S from "./description.style";

interface DescriptionProps {
    className?: string;
    children: React.ReactNode;
}

export const Description: FC<DescriptionProps> = ({ children, className }) => (
    <S.Description className={className}>{children}</S.Description>
);
