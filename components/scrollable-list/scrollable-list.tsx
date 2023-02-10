import { FC, ReactNode } from "react";

import * as S from "./scrollable-list.style";
//import { useHorizontalScroll } from "@utils/hooks/use-horizontal-scroll";

export const ScrollableList: FC<{ children: ReactNode }> = ({ children }) => {
    //const scrollRef = useHorizontalScroll();
    return <S.ScrollableList>{children}</S.ScrollableList>;
};
