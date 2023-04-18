import React, { FunctionComponent } from 'react';
import { PASSWORD_REQUIREMENTS } from '../../lib/validations';
import { texts } from './misc/texts';
import Icon from './atoms/icon.component';

import * as S from './password-checker-widget.style';
import { IPasswordCheckerWidget } from './password-checker-widget.types';

const PasswordCheckerWidget: FunctionComponent<IPasswordCheckerWidget> = ({
  password = '',
  trans = {},
  block,
  theme,
}) => {
  return (
    <S.Wrapper theme={theme} block={block} className='password-checker-widget'>
      {PASSWORD_REQUIREMENTS.map(({ name, checker }, index: number) => {
        const isChecked = checker(password);
        const isFilled = Boolean(password);

        return (
          <S.Item key={index}>
            <Icon checked={isChecked} filled={isFilled} />
            {trans[name] || texts[name]}
          </S.Item>
        );
      })}
    </S.Wrapper>
  );
};

export default PasswordCheckerWidget;
