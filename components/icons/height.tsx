import React, { FC } from "react";

import { IconsProps } from "./icons.types";

const Height: FC<IconsProps> = ({ className }) => (
    <svg
        className={className}
        width="25"
        height="24"
        viewBox="0 0 25 24"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
    >
        <path
            d="M19.0518 0H5.45801V1.875H12.1947L7.40187 6.66778L8.72773 7.99359L11.2705 5.45081V18.5674L8.72773 16.0246L7.40187 17.3504L12.1765 22.125H5.45801V24H19.0518V22.125H12.2395L17.0141 17.3504L15.6883 16.0246L13.1455 18.5674V5.45081L15.6883 7.99359L17.0141 6.66778L12.2213 1.875H19.0518V0Z"
            fill="#898989"
        />
    </svg>
);

export default Height;
