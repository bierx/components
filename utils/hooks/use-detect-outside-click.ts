import { useEffect, RefObject } from "react";

export const useDetectOutsideClick = (
    el: RefObject<HTMLDivElement>,
    callback: (isOpen: boolean) => void,
) => {
    useEffect(() => {
        const pageClickEvent = (event: Event) => {
            if (
                el?.current !== null &&
                !el?.current.contains(event.target as HTMLButtonElement)
            ) {
                callback && callback(false);
            }
        };

        const isServer = typeof window === "undefined";

        if (isServer) {
            return;
        }

        window.addEventListener("click", pageClickEvent);

        return () => {
            window.removeEventListener("click", pageClickEvent);
        };
    }, [el]);
};
