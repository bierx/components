import styled from 'styled-components';
import { COLORS, getColorVar } from '@zenith/utils';
import { IPasswordCheckerWidget } from './password-checker-widget.types';

export const Wrapper = styled.div<{
  block: IPasswordCheckerWidget['block'];
  theme?: IPasswordCheckerWidget['theme'];
}>`
  font-size: 12px;
  line-height: 20px;
  font-weight: 400;
  margin-bottom: 10px;
  text-align: left;
  color: ${({ theme }) => getColorVar(theme === 'dark' ? COLORS.GREY.SHADE_300 : COLORS.GREY.SHADE_700)};
  grid-row-gap: 4px;
  display: ${({ block }) => (block ? 'grid' : 'inline-grid')};
`;

export const Item = styled.div`
  display: grid;
  grid-template-columns: 12px auto;
  grid-column-gap: 8px;
  align-items: center;
`;
