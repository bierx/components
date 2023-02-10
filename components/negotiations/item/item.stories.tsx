import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";
import { Item } from "./item";

export default {
    title: "Horizontal Menu",
    component: Item,
} as ComponentMeta<typeof Item>;

const Template: ComponentStory<typeof Item> = (args) => <Item {...args} />;

export const HorizontalMenuDefault = Template.bind({});

HorizontalMenuDefault.args = {};
