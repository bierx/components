import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";
import { Divider } from "./divider";

export default {
    title: "Divider",
    component: Divider,
} as ComponentMeta<typeof Divider>;

const Template: ComponentStory<typeof Divider> = (args) => (
    <Divider {...args}>Divider</Divider>
);

export const DividerDefault = Template.bind({});

DividerDefault.args = {};
