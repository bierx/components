import React, { FunctionComponent } from 'react';
import { texts } from './misc/texts';
import Icon from './atoms/icon.component';

import * as S from './password-checker-widget.style';
import { IPasswordCheckerWidget } from './password-checker-widget.types';

export const HAS_LEAST_ONE_NUMBER = /(?=.*[0-9])/;
export const HAS_LEAST_ONE_SPECIAL_CHARACTER = /(?=.*[!@#$%^&*])/;

export const checkLength = (string: string) => string.length >= INPUT_VALIDATION_RULES.minLength;

export const checkCharactersAndDigits = (string?: string) => {
  if (!string) {
    return false;
  }

  return HAS_LEAST_ONE_SPECIAL_CHARACTER.test(string) || HAS_LEAST_ONE_NUMBER.test(string);
};

export const PASSWORD_REQUIREMENTS = [
  {
    name: 'password_check_1' as const,
    checker: checkLength,
  },
  {
    name: 'password_check_2' as const,
    checker: checkCharactersAndDigits,
  },
];


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
