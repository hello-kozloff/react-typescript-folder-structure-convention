import React from 'react';
import { Story, Meta } from '@storybook/react/types-6-0';
import { Input, IInputProps } from '../../components/atoms';
import { ThemeProvider } from 'styled-components';
import theme from '../../theme';

export default {
  title: 'Atoms/Input',
  component: Input,
} as Meta;

export const input: Story<IInputProps> = (args) => (
  <ThemeProvider theme={theme}>
    <Input {...args} />
  </ThemeProvider>
);