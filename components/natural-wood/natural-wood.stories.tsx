import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";
import { NaturalWood } from "./natural-wood";

export default {
    title: "NaturalWood",
    component: NaturalWood,
} as ComponentMeta<typeof NaturalWood>;

const Template: ComponentStory<typeof NaturalWood> = (args) => (
    <NaturalWood {...args} />
);

export const LinkDefault = Template.bind({});

LinkDefault.args = {};
