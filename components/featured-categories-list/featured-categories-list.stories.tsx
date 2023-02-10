import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";
import { FeatureCategoriesList } from "./featured-categories-list";

export default {
    title: "FeatureCategoriesList",
    component: FeatureCategoriesList,
} as ComponentMeta<typeof FeatureCategoriesList>;

const Template: ComponentStory<typeof FeatureCategoriesList> = (args) => (
    <FeatureCategoriesList {...args} />
);

export const LinkDefault = Template.bind({});

LinkDefault.args = {};
