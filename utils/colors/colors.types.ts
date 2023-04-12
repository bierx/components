export type Shade = {
    name: string;
    value: string;
}

export type Color = {
    [key: string]: Shade;
}