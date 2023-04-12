import { Shade } from './colors.types';
import { getContrast, transparentize as polishedTransparentize, setLightness as polishedSetLightness } from 'polished';
import { COLORS, Palette } from './index';


export function setLightness (lightness: number, color: Shade): Shade {
    return {
        name: `${color.name}-l${(lightness*100).toFixed(0)}`,
        value: polishedSetLightness(lightness, color.value)
    };
}

/**
 * Returns other shade from given color
 *
 */
export function getShade(palette: Palette, color: Shade, shade: string) {
    return palette[getColorName(color)][`SHADE_${shade}`];
}

/**
 * Return shade name for a given color
 */
export function getColorName(color: Shade) {
    return color.name.split('-')[0].toUpperCase() as keyof Palette;
}

/**
 * Returns a more readable color of two given alternatives
 */
export function readable(palette: Palette, background: Shade, lightColor: Shade, darkColor: Shade) {
    const lightContrast = getContrast(background.value, lightColor.value);
    const darkContrast = getContrast(background.value, darkColor.value);

    return lightContrast > darkContrast ? lightColor : darkColor;
}

/**
 * Makes a given color transparent, by a given amount (range for the amount is between 0 to 1)
 */
export function transparentize(opacity: number, color: Shade): Shade {
    return {
        name: `${color.name}-t${(opacity*100).toFixed(0)}`,
        value: polishedTransparentize(1-opacity, color.value)
    }
}

export function getPaletteVars(colors: typeof COLORS) {
    const palette: string[] = [];

    Object.values(colors).forEach((color) => {
        Object.values(color).forEach((shade) => {
            palette.push(`--zth-color-${shade.name}: ${shade.value};`);
        });
    });

    return palette.join('');
}

export function getColorVar(shade: Shade) {
    return `var(--zth-color-${shade.name}, ${shade.value})`;
}

export function getAllColorVars(colors: typeof COLORS) {
    return Object.values(colors).flatMap(shades => Object.values(shades).map(shade => getColorVar(shade)))
}