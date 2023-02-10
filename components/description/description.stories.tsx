import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";
import { Description } from "./description";

export default {
    title: "Description",
    component: Description,
} as ComponentMeta<typeof Description>;

const Template: ComponentStory<typeof Description> = (args) => (
    <Description {...args}>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
        tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim
        veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea
        commodo consequat. Duis aute irure dolor in reprehenderit in voluptate
        velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint
        occaecat cupidatat non proident, sunt in culpa qui officia deserunt
        mollit anim id est laborum.
    </Description>
);

export const DescriptionDefault = Template.bind({});

DescriptionDefault.args = {};
