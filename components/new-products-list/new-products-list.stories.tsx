import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";
import { NewProductsList } from "./new-products-list";

export default {
    title: "NewProductsList",
    component: NewProductsList,
} as ComponentMeta<typeof NewProductsList>;

const Template: ComponentStory<typeof NewProductsList> = (args) => (
    <NewProductsList {...args} />
);

export const LinkDefault = Template.bind({});

LinkDefault.args = {};
