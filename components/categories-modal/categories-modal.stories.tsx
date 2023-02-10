import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";
import { CategoriesModal } from "./categories-modal";

export default {
    title: "CategoriesModal",
    component: CategoriesModal,
} as ComponentMeta<typeof CategoriesModal>;

const Template: ComponentStory<typeof CategoriesModal> = (args) => (
    <CategoriesModal {...args} />
);

export const LinkDefault = Template.bind({});

LinkDefault.args = {};
