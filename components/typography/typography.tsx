import type { FC, ReactNode } from "react";
import { SIZE } from "./typography.types";
export type { SIZE } from "./typography.types";

import * as S from "./typography.style";

export interface TypographyProps {
    size: SIZE;
    className?: string;
    children?: ReactNode;
    counter?: string;
}

export const Typography: FC<TypographyProps> = ({
    size,
    children,
    className,
    counter,
}) => {
    return (
        <S.Typography counter={counter} className={className} size={size}>
            {children}
        </S.Typography>
    );
};
