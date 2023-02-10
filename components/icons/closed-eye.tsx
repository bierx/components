import React, { FC } from "react";
import { IconsProps } from "./icons.types";

const ClosedEye: FC<IconsProps> = ({ className, size = 24 }) => (
    <svg
        className={className}
        width={size}
        height={size}
        viewBox={`0 0 ${size} ${size}`}
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
    >
        <path
            d="M17.81 13.3901C19.5704 11.9441 20.7116 9.87992 21 7.62009C21.0158 7.48877 21.0055 7.35563 20.9698 7.22828C20.9341 7.10092 20.8737 6.98184 20.792 6.87784C20.7102 6.77384 20.6088 6.68695 20.4936 6.62214C20.3783 6.55732 20.2513 6.51585 20.12 6.50009C19.9887 6.48434 19.8555 6.4946 19.7282 6.53029C19.6008 6.56599 19.4818 6.62642 19.3777 6.70813C19.2737 6.78985 19.1869 6.89125 19.122 7.00655C19.0572 7.12184 19.0158 7.24877 19 7.38009C18.7609 9.06638 17.9212 10.6097 16.6351 11.7263C15.3491 12.8429 13.7031 13.4577 12 13.4577C10.2969 13.4577 8.65095 12.8429 7.36489 11.7263C6.07884 10.6097 5.23907 9.06638 5 7.38009C4.98424 7.24877 4.94277 7.12184 4.87796 7.00655C4.81315 6.89125 4.72626 6.78985 4.62226 6.70813C4.51825 6.62642 4.39918 6.56599 4.27182 6.53029C4.14446 6.4946 4.01132 6.48434 3.88 6.50009C3.74868 6.51585 3.62175 6.55732 3.50645 6.62214C3.39116 6.68695 3.28976 6.77384 3.20804 6.87784C3.12633 6.98184 3.0659 7.10092 3.0302 7.22828C2.99451 7.35563 2.98424 7.48877 3 7.62009C3.28584 9.87844 4.42333 11.9424 6.18 13.3901L3.88 15.7101C3.71618 15.9014 3.63057 16.1475 3.64029 16.3991C3.65001 16.6508 3.75434 16.8896 3.93244 17.0677C4.11053 17.2458 4.34927 17.3501 4.60095 17.3598C4.85263 17.3695 5.0987 17.2839 5.29 17.1201L7.9 14.5201C8.86981 15.0102 9.91986 15.3218 11 15.4401V19.0001C11 19.2653 11.1054 19.5197 11.2929 19.7072C11.4804 19.8947 11.7348 20.0001 12 20.0001C12.2652 20.0001 12.5196 19.8947 12.7071 19.7072C12.8946 19.5197 13 19.2653 13 19.0001V15.4401C14.0801 15.3218 15.1302 15.0102 16.1 14.5201L18.71 17.1201C18.9013 17.2839 19.1474 17.3695 19.3991 17.3598C19.6507 17.3501 19.8895 17.2458 20.0676 17.0677C20.2457 16.8896 20.35 16.6508 20.3597 16.3991C20.3694 16.1475 20.2838 15.9014 20.12 15.7101L17.81 13.3901Z"
            fill="#898989"
        />
    </svg>
);

export default ClosedEye;
