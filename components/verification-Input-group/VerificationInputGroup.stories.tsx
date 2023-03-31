import React, { useState } from 'react';
import { Story, Meta } from '@storybook/react/types-6-0';
import VerificationInputGroup from './VerificationInputGroup.component';
import { IVerificationInputGroup, CBOnChange } from './VerificationInputGroup.types';
import { Button, Typography } from '@zenith/components';
import { COLORS } from '@zenith/utils';
import styled from 'styled-components';

export default {
  title: 'Atoms/VerificationInputGroup',
  component: VerificationInputGroup,
  argTypes: {
    placeholder: {
      name: 'Input placeholder',
      type: 'string',
      defaultValue: '0',
    },
    inputsLength: {
      name: 'Number of inputs',
      type: 'number',
      defaultValue: 6,
    },
    hasError: {
      name: 'Has external error',
      type: 'boolean',
      defaultValue: false,
    },
    errorMsg: {
      name: 'Input error message',
      type: 'string',
      defaultValue: '',
    },
    isDisabled: {
      name: 'Disable inputs',
      defaultValue: false,
      type: 'boolean',
    },
    value: {
      name: 'Default value',
    },
    onChange: {
      action: 'onChange',
    },
  },
} as Meta;

const InputsWrapper = styled.div`
  margin: 30px 0;
`;

const LabelWrapper = styled.div`
  margin: 15px 0;
`;

const ButtonsWrapper = styled.div`
  margin: 20px 0;
  display: flex;
  gap: 10px;
`;

const Template: Story<IVerificationInputGroup> = ({ ...args }) => {
  const [concatenatedValue, setConcatenatedValue] = useState('');
  const [value, setValue] = useState<string | null>('');
  const [disabled, setDisabled] = useState(Boolean(args.isDisabled));
  const [isValid, setIsValid] = useState(false);
  const [isFullFilled, setIsFullFilled] = useState(false);
  const handleOnChange: CBOnChange = (value, isFullFilled, isValid) => {
    setConcatenatedValue(value);
    setIsValid(isValid);
    setIsFullFilled(isFullFilled);
  };

  return (
    <>
      <ButtonsWrapper>
        <Button onClick={() => setValue('111111')}>external source set value</Button>
        <Button onClick={() => setValue(null)}>clear value</Button>
        <Button
          onClick={() => setDisabled((prevValue: boolean) => !prevValue)}
          color={disabled ? COLORS.GREEN.SHADE_400 : COLORS.RED.SHADE_400}
        >
          {disabled ? 'enable input' : 'disable input'}
        </Button>
      </ButtonsWrapper>
      <InputsWrapper>
        <VerificationInputGroup {...args} onChange={handleOnChange} value={value} isDisabled={disabled} />
      </InputsWrapper>
      <LabelWrapper>
        <Typography>{`Input total result: ${concatenatedValue}`}</Typography>
      </LabelWrapper>
      <LabelWrapper>
        <Typography>{`Is full filled: ${isFullFilled}`}</Typography>
      </LabelWrapper>
      <Typography>{`Is valid: ${isValid}`}</Typography>
    </>
  );
};

export const Default = Template.bind({});
Default.args = {};
