import { FC } from "react";

import * as S from "./loading.style";

export const Loading: FC<{ size?: number; borderSize?: number }> = (props) => {
    return <S.Loading {...props} />;
};
