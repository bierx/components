import { BUTTON_VARIANT, SIZE, ButtonProps } from "./button.types";
import { Theme } from "styled-components";

interface Props extends ButtonProps, Theme {}

interface ReturnProps {
    default: string;
    hover: string;
    disabled: string;
}

interface ReturnSizeProps {
    font: string;
    height: string;
    weight: string;
    radius?: string;
}

export const getBgColors = (props: Props): ReturnProps => {
    if (props.variant === BUTTON_VARIANT.OUTLINED) {
        return {
            default: props.theme.colors.transparent,
            hover: props.theme.colors.transparent,
            disabled: props.theme.colors.transparent,
        };
    }

    return {
        default: props.theme.colors.primary,
        hover: props.theme.colors.secondaryHover,
        disabled: props.theme.colors.grey,
    };
};

export const getTextColors = (props: Props): ReturnProps => {
    if (props.variant === BUTTON_VARIANT.OUTLINED) {
        return {
            default: props.theme.colors.secondary,
            hover: props.theme.colors.secondaryHover,
            disabled: props.theme.colors.grey,
        };
    }

    return {
        default: props.theme.colors.black,
        hover: props.theme.colors.black,
        disabled: props.theme.colors.greyLight,
    };
};

const buttonSizes = new Map();

buttonSizes.set(SIZE.TINY, {
    font: "15px",
    height: "34px",
    weight: "500",
});
buttonSizes.set(SIZE.SMALL, {
    font: "15px",
    height: "40px",
    weight: "500",
});

buttonSizes.set(SIZE.MEDIUM, {
    font: "15px",
    height: "48px",
    weight: "500",
});
buttonSizes.set(SIZE.LARGE, {
    font: "18px",
    height: "56px",
    weight: "600",
    radius: "27px",
});

export const getSize = (props: ButtonProps): ReturnSizeProps => {
    const buttonSize = buttonSizes.get(props.size || SIZE.MEDIUM);

    return buttonSize;
};

export const prepareVariables = (props: Props): string => {
    const bgColors = getBgColors(props);
    const textColors = getTextColors(props);
    const size = getSize(props);
    return `
            --defaultBgColor: ${bgColors.default};
            --hoverBgColor: ${bgColors.hover};
            --disabledBgColor: ${bgColors.disabled};
            --defaultTextColor: ${textColors.default};
            --hoverTextColor: ${textColors.hover};
            --disabledTextColor: ${textColors.disabled};
            --fontWeight: ${size.weight};
            --fontSize: ${size.font};
            --lineHeight: ${size.height};
            --width: ${props.block ? "100%" : "auto"};
            --radius: ${size.radius || "24px"};
            --border:  ${
                props.variant === BUTTON_VARIANT.OUTLINED ? "1px solid" : "none"
            };
        `;
};
