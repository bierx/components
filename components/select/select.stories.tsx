import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";
import { Select } from "./select";

export default {
    title: "Select",
    component: Select,
} as ComponentMeta<typeof Select>;

const Template: ComponentStory<typeof Select> = (args) => (
    <>
        <div>
            <Select {...args} />
        </div>
    </>
);

export const SelectPrimary = Template.bind({});

SelectPrimary.args = {
    label: "Your name",
    required: true,
    name: "sample",
    options: [
        { id: "1", name: "Test" },
        { id: "2", name: "Test 2" },
    ],
};

export const SelectError = Template.bind({});

SelectError.args = {
    label: "Your name",
    required: true,
    error: "Validation error",
    text: "Sample text",
    name: "sample",
    options: [
        { id: "1", name: "Test" },
        { id: "2", name: "Test 2" },
    ],
};

export const SelectSampleText = Template.bind({});

SelectSampleText.args = {
    label: "Your name",
    required: true,
    text: "Sample text",
    name: "sample",
    options: [
        { id: "1", name: "Test" },
        { id: "2", name: "Test 2" },
    ],
};

export const SelectMultiple = Template.bind({});

SelectMultiple.args = {
    label: "Localization",
    multiple: true,
    searchPlaceholder: "Search",
    open: true,
    searchLabel: "All",
    name: "sample",
    options: [
        { id: "1", name: "Test" },
        { id: "2", name: "Test 2" },
    ],
};
