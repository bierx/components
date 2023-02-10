import React, { FC } from "react";

import { IconsProps } from "./icons.types";

const Star: FC<IconsProps> = ({ className, size = 32 }) => (
    <svg
        className={className}
        width={size}
        height={size}
        viewBox="0 0 32 32"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
    >
        <circle cx="16" cy="16" r="15.5" fill="#04FB90" stroke="black" />
        <path
            d="M20.6333 23.4998C20.5 23.5004 20.3686 23.4689 20.25 23.4082L16 21.1832L11.75 23.4082C11.612 23.4807 11.4564 23.5131 11.3009 23.5017C11.1454 23.4902 10.9962 23.4354 10.8703 23.3433C10.7445 23.2513 10.6469 23.1258 10.5888 22.9811C10.5307 22.8365 10.5144 22.6784 10.5417 22.5248L11.375 17.8332L7.94165 14.4998C7.83453 14.3929 7.75854 14.2589 7.72184 14.1121C7.68514 13.9653 7.68911 13.8112 7.73332 13.6665C7.78162 13.5184 7.87047 13.3868 7.98978 13.2866C8.10909 13.1865 8.25409 13.1218 8.40832 13.0998L13.1583 12.4082L15.25 8.13318C15.3182 7.99229 15.4248 7.87346 15.5574 7.79032C15.6901 7.70718 15.8434 7.66309 16 7.66309C16.1565 7.66309 16.3099 7.70718 16.4426 7.79032C16.5752 7.87346 16.6817 7.99229 16.75 8.13318L18.8667 12.3998L23.6167 13.0915C23.7709 13.1134 23.9159 13.1781 24.0352 13.2783C24.1545 13.3785 24.2434 13.5101 24.2917 13.6582C24.3359 13.8029 24.3398 13.9569 24.3031 14.1038C24.2664 14.2506 24.1904 14.3846 24.0833 14.4915L20.65 17.8248L21.4833 22.5165C21.5131 22.6727 21.4975 22.8342 21.4384 22.9819C21.3794 23.1295 21.2793 23.2572 21.15 23.3498C20.9991 23.4556 20.8174 23.5083 20.6333 23.4998Z"
            fill="black"
        />
    </svg>
);

export default Star;
