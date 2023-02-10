import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";
import { Checkbox } from "./checkbox";
import { Link } from "@/components/link";
import * as S from "./checkbox.style";

export default {
    title: "Checkbox",
    component: Checkbox,
} as ComponentMeta<typeof Checkbox>;

const Template: ComponentStory<typeof Checkbox> = (args) => (
    <S.CheckBoxGroup>
        <Checkbox {...args}>checkbox</Checkbox>
        <Checkbox {...args}>
            Akceptuję <Link href="https://google.com">regulamin</Link> oraz{" "}
            <Link href="https://google.com">politykę prywatności</Link>.
        </Checkbox>
    </S.CheckBoxGroup>
);

export const CheckboxDefault = Template.bind({});

CheckboxDefault.args = {};
