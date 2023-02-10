import React, { FC } from "react";

import { IconsProps } from "./icons.types";

const Depth: FC<IconsProps> = ({ className }) => (
    <svg
        className={className}
        width="25"
        height="24"
        viewBox="0 0 25 24"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
    >
        <path
            d="M14.4462 5.13101L21.0066 6.90839L19.2523 13.4555L17.4412 12.9702L18.3719 9.49666L7.01266 16.0549L10.4862 16.9857L10.0009 18.7968L3.44717 16.9946L5.19477 10.4723L7.00589 10.9576L6.07516 14.4311L17.4344 7.87287L13.9609 6.94214L14.4462 5.13101Z"
            fill="#898989"
        />
    </svg>
);

export default Depth;
