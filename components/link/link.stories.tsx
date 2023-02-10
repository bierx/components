import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";
import { Link } from "./link";

export default {
    title: "Link",
    component: Link,
} as ComponentMeta<typeof Link>;

const Template: ComponentStory<typeof Link> = (args) => (
    <Link {...args}>Link</Link>
);

export const LinkDefault = Template.bind({});

LinkDefault.args = {
    href: "https//google.com",
};
