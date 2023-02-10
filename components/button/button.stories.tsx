import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";
import { Button } from "./button";
import { BUTTON_VARIANT } from "./button.types";

export default {
    title: "Button",
    component: Button,
} as ComponentMeta<typeof Button>;

const Template: ComponentStory<typeof Button> = (args) => (
    <>
        <Button {...args}>Button Primary</Button>
        <Button {...args} disabled>
            Button Disabled
        </Button>
    </>
);

export const ButtonPrimary = Template.bind({});

ButtonPrimary.args = {
    variant: BUTTON_VARIANT.DEFAULT,
    onClick: () => alert(`Button ${BUTTON_VARIANT.DEFAULT} clicked!`),
};

export const ButtonOutlined = Template.bind({});

ButtonOutlined.args = {
    variant: BUTTON_VARIANT.OUTLINED,
    onClick: () => alert(`Button ${BUTTON_VARIANT.OUTLINED} clicked!`),
};
