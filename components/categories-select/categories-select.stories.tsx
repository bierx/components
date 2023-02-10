import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";
import { CategoriesSelect } from "./categories-select";

export default {
    title: "CategoriesSelect",
    component: CategoriesSelect,
} as ComponentMeta<typeof CategoriesSelect>;

const Template: ComponentStory<typeof CategoriesSelect> = (args) => (
    <CategoriesSelect {...args} />
);

export const LinkDefault = Template.bind({});

LinkDefault.args = {};
