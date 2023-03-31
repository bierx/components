import styled from 'styled-components';
import { COLORS } from '@zenith/utils';
import { IVerificationInputGroup } from './VerificationInputGroup.types';

export const InputWrapper = styled.div`
  display: flex;
  align-items: center;
  grid-column-gap: 13px;
`;

export const Input = styled.input.attrs({
  type: 'text',
  inputMode: 'numeric',
  pattern: '[0-9]*',
  autoComplete: 'off',
  role: 'presentation',
})<{
  error: IVerificationInputGroup['hasError'];
}>`
  text-align: center;
  width: 42px;
  height: 42px;
  color: ${COLORS.GREY.SHADE_900.value};
  font-size: 22px;
  line-height: 34px;
  font-weight: 700;
  background-color: ${COLORS.MISC.WHITE.value};
  border: 1px solid ${COLORS.GREY.SHADE_300.value};
  border-radius: 4px;
  outline: none;

  &:hover {
    border-color: ${COLORS.BLUE.SHADE_400.value};
  }

  &:focus {
    border-color: ${COLORS.BLUE.SHADE_400.value};
    outline: 2px solid ${COLORS.BLUE.SHADE_200.value};
  }

  &[disabled] {
    background-color: ${COLORS.GREY.SHADE_100.value};
    border-color: ${COLORS.GREY.SHADE_200.value};
    opacity: 0.9;
  }

  ${(props) => props.error && ` border-color: ${COLORS.RED.SHADE_400.value} !important;`}
`;

export const Error = styled.div`
  margin-top: 6px;
`;
