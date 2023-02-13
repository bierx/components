import { Theme } from "styled-components";

export const generateVariablesFromTheme = (props: Theme): string => {
    const colors = props?.theme?.colors;
    if (!colors) {
        return "";
    }
    const variables = Object.entries(colors).map(
        (style) => `--${style[0]}: ${style[1]}`,
    );
    return variables.join(";");
};
