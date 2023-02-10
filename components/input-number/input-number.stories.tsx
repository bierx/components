import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";
import { InputNumber } from "./input-number";

export default {
    title: "InputNumber",
    component: InputNumber,
} as ComponentMeta<typeof InputNumber>;

const Template: ComponentStory<typeof InputNumber> = (args) => (
    <InputNumber {...args} />
);

export const InputNumberDefault = Template.bind({});

InputNumberDefault.args = {
    defaultValue: 1,
    min: 1,
};
