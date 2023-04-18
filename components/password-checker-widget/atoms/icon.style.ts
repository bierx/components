import styled from 'styled-components';
import { Check, X as ZenithX } from '@zenith/icons';
import { COLORS } from '@zenith/utils';

const iconsStyle = `
  width: 12px;
  height: 12px;
  border-radius: 50%;
  display: inline-block;
  vertical-align: middle;
  color: ${COLORS.MISC.WHITE.value};
`;

export const Dot = styled.div`
  ${iconsStyle}
  background: ${COLORS.GREY.SHADE_300.value};
`;

export const CheckIcon = styled(Check)`
  ${iconsStyle}
  background: ${COLORS.GREEN.SHADE_400.value};
`;

export const X = styled(ZenithX)`
  ${iconsStyle}
  background: ${COLORS.RED.SHADE_400.value};
`;
