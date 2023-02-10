import React, { FC } from "react";

import { IconsProps } from "./icons.types";

const Color: FC<IconsProps> = ({ className }) => (
    <svg
        className={className}
        width="32"
        height="32"
        viewBox="0 0 32 32"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
    >
        <path
            d="M22.2838 10.2336C21.4483 9.40397 20.4555 8.74957 19.3636 8.30882C18.2717 7.86806 17.1028 7.64984 15.9255 7.66695C13.7153 7.66142 11.5935 8.5341 10.0268 10.093C8.46011 11.6519 7.57684 13.7693 7.57132 15.9795C7.56579 18.1896 8.43846 20.3114 9.99736 21.8781C11.5563 23.4448 13.6737 24.3281 15.8838 24.3336C16.3601 24.3417 16.8255 24.1914 17.2071 23.9064C17.5887 23.6213 17.8648 23.2176 17.9921 22.7586C18.0733 22.4272 18.0725 22.0809 17.9897 21.7499C17.9069 21.4188 17.7447 21.1129 17.5171 20.8586C17.4645 20.7987 17.4302 20.725 17.4182 20.6462C17.4062 20.5674 17.4171 20.4868 17.4496 20.4139C17.482 20.3411 17.5347 20.2791 17.6013 20.2354C17.668 20.1916 17.7458 20.1678 17.8255 20.167H19.2005C20.4946 20.173 21.7431 19.6892 22.6953 18.8128C23.6475 17.9364 24.2328 16.7321 24.3338 15.4419C24.3648 14.48 24.199 13.5218 23.8465 12.6262C23.494 11.7306 22.9622 10.9164 22.2838 10.2336ZM19.2338 18.5003H17.8588C17.4573 18.498 17.0637 18.6123 16.7258 18.8293C16.3879 19.0463 16.1202 19.3567 15.9553 19.7228C15.7903 20.0889 15.7351 20.495 15.7964 20.8919C15.8576 21.2888 16.0328 21.6593 16.3005 21.9586C16.3526 22.0112 16.3895 22.077 16.4071 22.1489C16.4247 22.2209 16.4224 22.2962 16.4005 22.3669C16.3588 22.5419 16.1671 22.6503 15.9088 22.6669C14.9624 22.6548 14.0294 22.4413 13.172 22.0406C12.3145 21.6399 11.5522 21.0613 10.9357 20.3431C10.3192 19.6249 9.86271 18.7837 9.59657 17.8754C9.33043 16.9671 9.26075 16.0126 9.39215 15.0753C9.62979 13.5002 10.4168 12.06 11.6139 11.0092C12.8111 9.95848 14.3413 9.36495 15.9338 9.33362H16.0005C16.9429 9.32128 17.8782 9.49779 18.7512 9.85274C19.6243 10.2077 20.4174 10.7339 21.0838 11.4003C21.6038 11.9206 22.0124 12.5414 22.2846 13.2248C22.5568 13.9082 22.687 14.6399 22.6671 15.3753C22.5809 16.2278 22.1826 17.0184 21.5489 17.5952C20.9152 18.172 20.0907 18.4944 19.2338 18.5003Z"
            fill="white"
        />
        <path
            d="M16 12.666C16.6904 12.666 17.25 12.1064 17.25 11.416C17.25 10.7257 16.6904 10.166 16 10.166C15.3096 10.166 14.75 10.7257 14.75 11.416C14.75 12.1064 15.3096 12.666 16 12.666Z"
            fill="white"
        />
        <path
            d="M18.7087 11.9996C18.4947 12.1233 18.3221 12.3076 18.2128 12.5293C18.1035 12.751 18.0624 13.0001 18.0947 13.2451C18.1269 13.4902 18.2311 13.7202 18.394 13.906C18.557 14.0919 18.7713 14.2253 19.0101 14.2893C19.2488 14.3534 19.5012 14.3452 19.7352 14.2659C19.9693 14.1865 20.1746 14.0396 20.3252 13.8436C20.4758 13.6476 20.5649 13.4113 20.5812 13.1647C20.5976 12.9181 20.5405 12.6721 20.4171 12.458C20.3351 12.3156 20.2258 12.1909 20.0955 12.0908C19.9653 11.9907 19.8166 11.9173 19.6579 11.8747C19.4992 11.8322 19.3337 11.8213 19.1709 11.8427C19.008 11.8642 18.851 11.9175 18.7087 11.9996Z"
            fill="white"
        />
        <path
            d="M13.292 12.0009C13.0779 11.8775 12.8319 11.8204 12.5853 11.8367C12.3387 11.8531 12.1024 11.9422 11.9064 12.0927C11.7104 12.2433 11.5635 12.4486 11.4841 12.6827C11.4048 12.9168 11.3966 13.1692 11.4607 13.4079C11.5247 13.6466 11.6581 13.861 11.844 14.0239C12.0298 14.1869 12.2598 14.291 12.5049 14.3233C12.7499 14.3556 12.999 14.3144 13.2207 14.2051C13.4424 14.0958 13.6267 13.9233 13.7504 13.7092C13.8325 13.567 13.8858 13.41 13.9073 13.2471C13.9287 13.0842 13.9178 12.9187 13.8753 12.7601C13.8327 12.6014 13.7593 12.4527 13.6592 12.3224C13.5591 12.1922 13.4344 12.0829 13.292 12.0009Z"
            fill="white"
        />
        <path
            d="M11.1335 15.3833C10.9285 15.5218 10.7691 15.7179 10.6757 15.947C10.5822 16.176 10.5588 16.4276 10.6084 16.67C10.658 16.9124 10.7785 17.1346 10.9544 17.3084C11.1304 17.4823 11.354 17.6001 11.5969 17.6468C11.8399 17.6935 12.0912 17.6671 12.3191 17.5709C12.547 17.4747 12.7413 17.313 12.8773 17.1063C13.0132 16.8997 13.0848 16.6573 13.083 16.4099C13.0811 16.1625 13.0059 15.9213 12.8668 15.7167C12.7755 15.5803 12.658 15.4634 12.5212 15.3727C12.3844 15.282 12.2309 15.2194 12.0697 15.1884C11.9085 15.1574 11.7428 15.1586 11.5821 15.1921C11.4214 15.2256 11.2689 15.2906 11.1335 15.3833Z"
            fill="white"
        />
        <circle cx="16" cy="16" r="15.5" stroke="#898989" />
    </svg>
);

export default Color;
