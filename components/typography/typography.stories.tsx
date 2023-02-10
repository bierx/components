import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";
import { Typography } from "./typography";
import { SIZE } from "./typography.types";
export default {
    title: "Typography",
    component: Typography,
} as ComponentMeta<typeof Typography>;

const Template: ComponentStory<typeof Typography> = (args) => {
    return (
        <>
            {Object.values(SIZE).map((size: SIZE) => (
                <Typography key={size} {...{ ...args, size }}>
                    {size}
                </Typography>
            ))}
        </>
    );
};

export const TypographyDefault = Template.bind({});

TypographyDefault.args = {};
