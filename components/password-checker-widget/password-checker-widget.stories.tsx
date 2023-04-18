import React, { ReactNode, useState } from 'react';
import { Story, Meta } from '@storybook/react/types-6-0';
import PasswordCheckerWidget from './password-checker-widget.component';
import { IPasswordCheckerWidget } from './password-checker-widget.types';
import Card from '../card/card.component';

export default {
  title: 'PasswordCheckerWidget',
  component: PasswordCheckerWidget,
} as Meta;

interface ITemplate extends IPasswordCheckerWidget {
  children: ReactNode;
}

const Template: Story<ITemplate> = ({ ...args }) => {
  const [value, setValue] = useState('');

  const handleChange = (evt: React.ChangeEvent<HTMLInputElement>) => {
    setValue(evt.target.value);
  };

  return (
    <Card theme={args.theme}>
      <input onChange={handleChange} value={value} />
      <PasswordCheckerWidget block password={value} {...args} />
    </Card>
  );
};

export const Default = Template.bind({});
Default.args = {};

export const Dark = Template.bind({});
Dark.args = {
  theme: 'dark',
};

export const CustomTexts = Template.bind({});
CustomTexts.args = {
  trans: {
    password_check_1: 'Custom text 1',
    password_check_2: 'Custom text 2',
  },
};
