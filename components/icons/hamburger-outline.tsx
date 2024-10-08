import React, { FC } from "react";

import { IconsProps } from "./icons.types";

const HamburgerOutline: FC<IconsProps> = ({ className, size = 36 }) => (
    <svg
        className={className}
        width={size}
        height={size}
        viewBox={`0 0 ${size} ${size}`}
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
    >
        <circle cx="18" cy="18" r="17.5" stroke="#898989" />
        <path
            d="M12 18.75C12.4142 18.75 12.75 18.4142 12.75 18C12.75 17.5858 12.4142 17.25 12 17.25C11.5858 17.25 11.25 17.5858 11.25 18C11.25 18.4142 11.5858 18.75 12 18.75Z"
            fill="white"
        />
        <path
            d="M24.045 17.25H14.955C14.5656 17.25 14.25 17.5656 14.25 17.955V18.045C14.25 18.4344 14.5656 18.75 14.955 18.75H24.045C24.4344 18.75 24.75 18.4344 24.75 18.045V17.955C24.75 17.5656 24.4344 17.25 24.045 17.25Z"
            fill="white"
        />
        <path
            d="M24.045 21H11.955C11.5656 21 11.25 21.3156 11.25 21.705V21.795C11.25 22.1844 11.5656 22.5 11.955 22.5H24.045C24.4344 22.5 24.75 22.1844 24.75 21.795V21.705C24.75 21.3156 24.4344 21 24.045 21Z"
            fill="white"
        />
        <path
            d="M24.045 13.5H11.955C11.5656 13.5 11.25 13.8156 11.25 14.205V14.295C11.25 14.6844 11.5656 15 11.955 15H24.045C24.4344 15 24.75 14.6844 24.75 14.295V14.205C24.75 13.8156 24.4344 13.5 24.045 13.5Z"
            fill="white"
        />
    </svg>
);

export default HamburgerOutline;
