import React from 'react';
import { Story, Meta } from '@storybook/react/types-6-0';
import { Button, IButtonProps } from '../../components/atoms';

export default {
  title: 'Atoms/Button',
  component: Button,
} as Meta;

export const button: Story<IButtonProps> = (args) => <Button {...args}>Кнопка</Button>;