import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";
import { FeaturedProducts } from "./featured-products";

export default {
    title: "FeaturedProducts",
    component: FeaturedProducts,
} as ComponentMeta<typeof FeaturedProducts>;

const Template: ComponentStory<typeof FeaturedProducts> = (args) => (
    <FeaturedProducts {...args} />
);

export const LinkDefault = Template.bind({});

LinkDefault.args = {};
