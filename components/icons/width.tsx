import React, { FC } from "react";

import { IconsProps } from "./icons.types";

const Width: FC<IconsProps> = ({ className }) => (
    <svg
        className={className}
        width="25"
        height="24"
        viewBox="0 0 25 24"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
    >
        <g clipPath="url(#clip0_2724_68760)">
            <path
                d="M22.3799 5.20312V11.9398L17.5871 7.14703L16.2612 8.47284L18.8041 11.0156H5.68751L8.23034 8.47284L6.90443 7.14703L2.12988 11.9216V5.20312H0.254883V18.7969H2.12988V11.9847L6.90443 16.7592L8.23034 15.4334L5.68751 12.8906H18.8041L16.2612 15.4334L17.5871 16.7592L22.3799 11.9664V18.7969H24.2549V5.20312H22.3799Z"
                fill="#898989"
            />
        </g>
        <defs>
            <clipPath id="clip0_2724_68760">
                <rect
                    width="24"
                    height="24"
                    fill="white"
                    transform="translate(0.254883)"
                />
            </clipPath>
        </defs>
    </svg>
);

export default Width;
