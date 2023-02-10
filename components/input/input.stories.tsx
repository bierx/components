import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";
import { Input } from "./input";
import { INPUT_VARIANT } from "./input.types";

export default {
    title: "Input",
    component: Input,
} as ComponentMeta<typeof Input>;

const Template: ComponentStory<typeof Input> = (args) => (
    <>
        <div>
            <Input {...args} />
        </div>
        <div>
            <Input {...args} disabled />
        </div>
    </>
);

export const InputPrimary = Template.bind({});

InputPrimary.args = {
    variant: INPUT_VARIANT.DEFAULT,
    label: "Your name",
    required: true,
    name: "sample",
};

export const InputError = Template.bind({});

InputError.args = {
    variant: INPUT_VARIANT.DEFAULT,
    label: "Your name",
    required: true,
    error: "Validation error",
    text: "Sample text",
    name: "sample",
};

export const InputSampleText = Template.bind({});

InputSampleText.args = {
    variant: INPUT_VARIANT.DEFAULT,
    label: "Your name",
    required: true,
    text: "Sample text",
    name: "sample",
};

export const InputSmallTextText = Template.bind({});

InputSmallTextText.args = {
    variant: INPUT_VARIANT.DEFAULT,
    label: "Value",
    required: true,
    text: "Sample text",
    name: "sample",
    asPlaceholder: true,
    showIcons: false,
    smallText: "PLN",
};
