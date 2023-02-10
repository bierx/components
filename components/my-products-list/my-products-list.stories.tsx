import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";
import { MyProductsList } from "./my-products-list";

export default {
    title: "MyProductsList",
    component: MyProductsList,
} as ComponentMeta<typeof MyProductsList>;

const Template: ComponentStory<typeof MyProductsList> = (args) => (
    <MyProductsList {...args} />
);

export const LinkDefault = Template.bind({});

LinkDefault.args = {};
