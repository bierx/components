import React from "react";

interface Size {
    type: string;
    value: string;
}

export interface ProductCardTypes {
    title: string;
    price: number;
    price_currency: string;
    url: string;
    images: string[];
    image?: string;
    category: string;
    location: string;
    sizes: Size[];
    weight: number;
    id: string;
    handleShowNegotiation?: (event?: React.MouseEvent) => void;
    handleToggleFavorite?: (event?: React.MouseEvent) => void;
    isFavorite?: boolean;
    price_negotiable?: boolean;
}
