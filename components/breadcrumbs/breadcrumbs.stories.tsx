import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";
import { Breadcrumbs } from "./breadcrumbs";

export default {
    title: "Breadcrumbs",
    component: Breadcrumbs,
} as ComponentMeta<typeof Breadcrumbs>;

const Template: ComponentStory<typeof Breadcrumbs> = (args) => (
    <Breadcrumbs {...args} />
);

export const BreadcrumbsDefault = Template.bind({});

BreadcrumbsDefault.args = {};
