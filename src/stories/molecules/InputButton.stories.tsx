import React from 'react';
import { Story, Meta } from '@storybook/react/types-6-0';
import { InputButton, IInputButton } from '../../components/molecules';

export default {
  title: 'Molecules/Input Button',
  component: InputButton,
} as Meta;

export const inputButton: Story<IInputButton> = (args) => (
  <InputButton
    inputProps={{
      placeholder: 'Введите текст'
    }}
    buttonProps={{
      children: 'Кнопка'
    }}
    {...args}
  />
);