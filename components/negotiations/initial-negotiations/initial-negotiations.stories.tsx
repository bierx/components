import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";
import { InitialNegotiations } from "./initial-negotiations";

export default {
    title: "NewProductsList",
    component: InitialNegotiations,
} as ComponentMeta<typeof InitialNegotiations>;

const Template: ComponentStory<typeof InitialNegotiations> = (args) => (
    <InitialNegotiations {...args} />
);

export const LinkDefault = Template.bind({});

LinkDefault.args = {};
