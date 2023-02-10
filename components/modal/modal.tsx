import React, { FC, useEffect, useState } from "react";
import Link from "next/link";

import { CloseCircleOutline } from "../icons";
import { ModalProps } from "./modal.types";

import * as S from "./modal.style";

export const Modal: FC<ModalProps> = ({
    children,
    open = false,
    backLink,
    width,
    height,
    center,
    verticalCenter,
    className,
    onClose,
}) => {
    const [isOpen, toggle] = useState(open);

    const handleClose = (event: React.MouseEvent) => {
        toggle(!isOpen);
        onClose && onClose(event);
    };

    useEffect(() => {
        if (isOpen) {
            document.body.style.overflow = "hidden";
            document.body.style.paddingRight = "5px";
        } else {
            document.body.style.overflow = "unset";
            document.body.style.paddingRight = "0";
        }

        return () => {
            document.body.style.overflow = "unset";
            document.body.style.paddingRight = "0";
        };
    }, [isOpen]);

    if (!isOpen) {
        return null;
    }

    const Close = () => (
        <S.Close onClick={handleClose}>
            <CloseCircleOutline />
        </S.Close>
    );

    return (
        <S.Outer verticalCenter={verticalCenter}>
            <S.Overlay>
                <S.Inner
                    center={center}
                    className={className}
                    width={width}
                    height={height}
                >
                    {backLink ? (
                        <Link href={backLink} passHref>
                            <a>
                                <Close />
                            </a>
                        </Link>
                    ) : (
                        <Close />
                    )}
                    {children}
                </S.Inner>
            </S.Overlay>
        </S.Outer>
    );
};
