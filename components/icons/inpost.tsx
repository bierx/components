import React, { FC } from "react";

import { IconsProps } from "./icons.types";

const InPost: FC<IconsProps> = ({ className }) => (
    <svg
        className={className}
        width="73"
        height="29"
        viewBox="0 0 73 29"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        xmlnsXlink="http://www.w3.org/1999/xlink"
    >
        <rect x="0.119629" width="72.2049" height="29" fill="url(#pattern0)" />
        <defs>
            <pattern
                id="pattern0"
                patternContentUnits="objectBoundingBox"
                width="1"
                height="1"
            >
                <use
                    xlinkHref="#image0_2135_58311"
                    transform="translate(0 -0.208909) scale(0.0138889 0.0345809)"
                />
            </pattern>
            <image
                id="image0_2135_58311"
                width="72"
                height="41"
                xlinkHref="data:image/png;base64,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"
            />
        </defs>
    </svg>
);

export default InPost;
