import React, { FC } from 'react';

import * as S from './icon.style';
import { IIcon } from './icon.types';

const Icon: FC<IIcon> = ({ checked, filled }) => {
  if (!filled) {
    return <S.Dot />;
  }

  return <>{checked ? <S.CheckIcon css={undefined} /> : <S.X css={undefined} />}</>;
};

export default Icon;
