import { BLUE } from './blue';
import { PURPLE } from './purple';
import { GREEN } from './green';
import { YELLOW } from './yellow';
import { ORANGE } from './orange';
import { RED } from './red';
import { GREY } from './grey';
import { MISC } from './misc';
import { Color } from './colors.types';

export const COLORS = {
    BLUE,
    PURPLE,
    GREEN,
    YELLOW,
    ORANGE,
    RED,
    GREY,
    MISC
};

export type Palette = Record<keyof typeof COLORS, Color>;