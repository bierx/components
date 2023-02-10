import React from "react";

export interface ModalProps {
    open: boolean;
    backLink?: string;
    width?: number;
    height?: number;
    children: React.ReactNode;
    className?: string;
    center?: boolean;
    verticalCenter?: boolean;
    onClose?: (event: React.MouseEvent) => void;
}
