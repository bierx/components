import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";
import { Categories } from "./categories";

export default {
    title: "Categories",
    component: Categories,
} as ComponentMeta<typeof Categories>;

const Template: ComponentStory<typeof Categories> = (args) => (
    <Categories {...args} />
);

export const LinkDefault = Template.bind({});

LinkDefault.args = {};
