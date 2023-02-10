import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";
import { Textarea } from "./textarea";

export default {
    title: "Textarea",
    component: Textarea,
} as ComponentMeta<typeof Textarea>;

const Template: ComponentStory<typeof Textarea> = (args) => (
    <Textarea {...args} />
);

export const TexAreaDefault = Template.bind({});

TexAreaDefault.args = {
    defaultValue: "abc",
    minLength: 80,
};
