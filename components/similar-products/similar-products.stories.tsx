import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";
import { SimilarProducts } from "./similar-products";

export default {
    title: "Similar Products",
    component: SimilarProducts,
} as ComponentMeta<typeof SimilarProducts>;

const Template: ComponentStory<typeof SimilarProducts> = (args) => (
    <SimilarProducts {...args} />
);

export const LinkDefault = Template.bind({});

LinkDefault.args = {};
