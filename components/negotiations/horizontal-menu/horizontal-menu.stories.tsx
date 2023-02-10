import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";
import { HorizontalMenu } from "./horizontal-menu";

export default {
    title: "Horizontal Menu",
    component: HorizontalMenu,
} as ComponentMeta<typeof HorizontalMenu>;

const Template: ComponentStory<typeof HorizontalMenu> = (args) => (
    <HorizontalMenu {...args} />
);

export const HorizontalMenuDefault = Template.bind({});

HorizontalMenuDefault.args = {};
