import React, { FC } from "react";

import { IconsProps } from "./icons.types";

const Dhl: FC<IconsProps> = ({ className }) => (
    <svg
        className={className}
        width="70"
        height="26"
        viewBox="0 0 70 26"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        xmlnsXlink="http://www.w3.org/1999/xlink"
    >
        <rect width="70" height="26" fill="url(#pattern0)" />
        <defs>
            <pattern
                id="pattern0"
                patternContentUnits="objectBoundingBox"
                width="1"
                height="1"
            >
                <use
                    xlinkHref="#image0_2135_58321"
                    transform="scale(0.0142857 0.0384615)"
                />
            </pattern>
            <image
                id="image0_2135_58321"
                width="70"
                height="26"
                xlinkHref="data:image/png;base64,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"
            />
        </defs>
    </svg>
);

export default Dhl;
