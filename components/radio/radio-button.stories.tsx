import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";
import { RadioButton } from "./radio-button";
import { RADIO_BUTTON_VARIANT } from "./radio-button.types";
import { RadioButtonWrapper } from "./radio-button-wrapper";
import { Spacing } from "@/styles/globalStyles";
import { Blik, Przelewy24, Dhl } from "@components/icons";

export default {
    title: "RadioButton",
    component: RadioButton,
} as ComponentMeta<typeof RadioButton>;

const Template: ComponentStory<typeof RadioButton> = (args) => (
    <>
        <div>
            <RadioButtonWrapper label="Default">
                <RadioButton {...args} label="Button 1" />
                <RadioButton {...args} label="Button 2" />
            </RadioButtonWrapper>
        </div>
        <Spacing spacing={50} />
        <div>
            <RadioButtonWrapper label="Block radio buttons" variant="block">
                <RadioButton {...args} label="Button 1" />
                <RadioButton {...args} label="Button 2" />
            </RadioButtonWrapper>
        </div>
        <Spacing spacing={50} />
        <div>
            <RadioButtonWrapper
                label="Block radio buttons with children"
                variant="block"
            >
                <RadioButton {...args} label="Button 1">
                    <Blik />
                </RadioButton>
                <RadioButton {...args} label="Button 2">
                    <Przelewy24 />
                </RadioButton>
            </RadioButtonWrapper>
        </div>
        <Spacing spacing={50} />
        <div>
            <RadioButtonWrapper
                label={
                    "Block radio buttons with children and label as ReactNode"
                }
                variant="block"
            >
                <RadioButton
                    {...args}
                    label={
                        <>
                            <Dhl />
                            <div>DHL Kurier</div>
                            <div>
                                od 2 do 4 dni roboczych od momentu (może ulec
                                wydłużeniu)
                            </div>
                        </>
                    }
                >
                    9.99 zł
                </RadioButton>
                <RadioButton
                    {...args}
                    label={
                        <>
                            <Dhl />
                            <div>Inpost Kurier</div>
                            <div>
                                od 2 do 4 dni roboczych od momentu (może ulec
                                wydłużeniu)
                            </div>
                        </>
                    }
                >
                    9.99 zł
                </RadioButton>
            </RadioButtonWrapper>
        </div>
    </>
);

export const RadioButtonDefault = Template.bind({});

RadioButtonDefault.args = {
    variant: RADIO_BUTTON_VARIANT.DEFAULT,
    label: "Default",
    name: "sample",
};
