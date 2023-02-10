import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";
import { Dashboard } from "./dashboard";

export default {
    title: "Description",
    component: Dashboard,
} as ComponentMeta<typeof Dashboard>;

const Template: ComponentStory<typeof Dashboard> = (args) => (
    <Dashboard {...args} />
);

export const DescriptionDefault = Template.bind({});

DescriptionDefault.args = {};
