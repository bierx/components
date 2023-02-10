import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";
import { UserPreview } from "./user-preview";

export default {
    title: "UserPreview",
    component: UserPreview,
} as ComponentMeta<typeof UserPreview>;

const Template: ComponentStory<typeof UserPreview> = (args) => (
    <UserPreview {...args} />
);

export const UserPreviewDefault = Template.bind({});

UserPreviewDefault.args = {};
