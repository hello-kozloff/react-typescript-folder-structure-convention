import React from 'react';
import { Story, Meta } from '@storybook/react/types-6-0';
import { Input, IInputProps } from '../../components/atoms';

export default {
  title: 'Atoms/Input',
  component: Input,
} as Meta;

export const input: Story<IInputProps> = (args) => <Input {...args} />;