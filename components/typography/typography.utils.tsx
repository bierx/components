import { SIZE } from "./typography.types";

const sizes = new Map();

sizes.set(
    SIZE.H1,
    `
    font-size: 54px;
    font-weight: 500;
    letter-spacing: -0.005em;
    line-height: 60px;
    `,
);
sizes.set(
    SIZE.H2,
    `
    font-size: 34px;
    font-weight: 600;
    line-height: 38px;
    `,
);

sizes.set(
    SIZE.H3,
    `
    font-size: 24px;
    font-weight: 500;
    letter-spacing: -0.003em;
    line-height: 32px;
    `,
);

sizes.set(
    SIZE.H4,
    `
    font-size: 18px;
    font-weight: 600;
    letter-spacing: -0.002em;
    line-height: 27px;
    `,
);

sizes.set(
    SIZE.H5,
    `
    font-size: 15px;
    font-weight: 400;
    line-height: 24px;
    `,
);

sizes.set(
    SIZE.H6,
    `
    font-size: 13px;
    font-weight: 400;
    line-height: 19.5px;

    `,
);

sizes.set(
    SIZE.P,
    `
    font-size: 13px;
    font-weight: 400;
    line-height: 24px;
    `,
);

export const getSize = (size: SIZE): string => sizes.get(size);
