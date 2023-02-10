import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";
import { ShowMore } from "./show-more";

export default {
    title: "Show More",
    component: ShowMore,
} as ComponentMeta<typeof ShowMore>;

const Template: ComponentStory<typeof ShowMore> = (args) => (
    <ShowMore {...args} />
);

export const TexAreaDefault = Template.bind({});

TexAreaDefault.args = {
    url: "/test",
};
