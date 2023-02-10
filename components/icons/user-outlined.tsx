import React, { FC } from "react";

import { IconsProps } from "./icons.types";

const UserOutlined: FC<IconsProps> = ({ className, size = 36 }) => (
    <svg
        className={className}
        width={size}
        height={size}
        viewBox="0 0 37 36"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
    >
        <circle cx="18.3857" cy="18" r="17.5" stroke="white" />
        <path
            d="M18.3857 17.25C18.9791 17.25 19.5591 17.0741 20.0525 16.7444C20.5458 16.4148 20.9303 15.9462 21.1574 15.3981C21.3844 14.8499 21.4439 14.2467 21.3281 13.6647C21.2123 13.0828 20.9266 12.5482 20.5071 12.1287C20.0875 11.7091 19.553 11.4234 18.971 11.3076C18.3891 11.1919 17.7859 11.2513 17.2377 11.4784C16.6895 11.7054 16.221 12.0899 15.8913 12.5833C15.5617 13.0766 15.3857 13.6567 15.3857 14.25C15.3857 15.0457 15.7018 15.8087 16.2644 16.3713C16.827 16.9339 17.5901 17.25 18.3857 17.25ZM18.3857 12.75C18.6824 12.75 18.9724 12.838 19.2191 13.0028C19.4658 13.1676 19.658 13.4019 19.7716 13.676C19.8851 13.9501 19.9148 14.2517 19.8569 14.5426C19.799 14.8336 19.6562 15.1009 19.4464 15.3107C19.2366 15.5204 18.9693 15.6633 18.6784 15.7212C18.3874 15.7791 18.0858 15.7494 17.8117 15.6358C17.5376 15.5223 17.3034 15.33 17.1385 15.0834C16.9737 14.8367 16.8857 14.5467 16.8857 14.25C16.8857 13.8522 17.0438 13.4706 17.3251 13.1893C17.6064 12.908 17.9879 12.75 18.3857 12.75Z"
            fill="white"
        />
        <path
            d="M18.3857 18.75C16.9934 18.75 15.658 19.3031 14.6734 20.2877C13.6889 21.2723 13.1357 22.6076 13.1357 24C13.1357 24.1989 13.2148 24.3897 13.3554 24.5303C13.4961 24.671 13.6868 24.75 13.8857 24.75C14.0847 24.75 14.2754 24.671 14.4161 24.5303C14.5567 24.3897 14.6357 24.1989 14.6357 24C14.6357 23.0054 15.0308 22.0516 15.7341 21.3483C16.4374 20.6451 17.3912 20.25 18.3857 20.25C19.3803 20.25 20.3341 20.6451 21.0374 21.3483C21.7407 22.0516 22.1357 23.0054 22.1357 24C22.1357 24.1989 22.2148 24.3897 22.3554 24.5303C22.4961 24.671 22.6868 24.75 22.8857 24.75C23.0847 24.75 23.2754 24.671 23.4161 24.5303C23.5567 24.3897 23.6357 24.1989 23.6357 24C23.6357 22.6076 23.0826 21.2723 22.0981 20.2877C21.1135 19.3031 19.7781 18.75 18.3857 18.75Z"
            fill="white"
        />
    </svg>
);

export default UserOutlined;
