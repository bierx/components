import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";
import { Address } from "./address";

export default {
    title: "Address",
    component: Address,
} as ComponentMeta<typeof Address>;

const Template: ComponentStory<typeof Address> = (args) => (
    <Address {...args} />
);

export const RegisterDefault = Template.bind({});

RegisterDefault.args = {};
