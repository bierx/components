import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";
import { DedicatedRoom } from "./dedicated-room";

export default {
    title: "DedicatedRoom",
    component: DedicatedRoom,
} as ComponentMeta<typeof DedicatedRoom>;

const Template: ComponentStory<typeof DedicatedRoom> = (args) => (
    <DedicatedRoom {...args} />
);

export const LinkDefault = Template.bind({});

LinkDefault.args = {};
