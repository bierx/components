import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";
import { Banner } from "./banner";

export default {
    title: "Banner",
    component: Banner,
} as ComponentMeta<typeof Banner>;

const Template: ComponentStory<typeof Banner> = (args) => <Banner {...args} />;

export const RegisterDefault = Template.bind({});

RegisterDefault.args = {};
