import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";
import { ProductCard } from "./product-card";

export default {
    title: "ProductCard",
    component: ProductCard,
} as ComponentMeta<typeof ProductCard>;

const Template: ComponentStory<typeof ProductCard> = (args) => (
    <ProductCard {...args} />
);

export const ProductCardDefault = Template.bind({});

ProductCardDefault.args = {
    title: "test",
    price: "100",
    url: "/",
    image: "/images/img1.png",
};
