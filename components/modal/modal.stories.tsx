import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";
import { Modal } from "./modal";
import { Typography } from "../typography";
import { SIZE } from "../typography/typography.types";

export default {
    title: "Modal",
    component: Modal,
} as ComponentMeta<typeof Modal>;

const Template: ComponentStory<typeof Modal> = (args) => (
    <Modal {...args}>
        <Typography size={SIZE.H3}>Modal</Typography>
    </Modal>
);

export const ModalDefault = Template.bind({});

ModalDefault.args = {
    open: true,
    backLink: "/home",
};
