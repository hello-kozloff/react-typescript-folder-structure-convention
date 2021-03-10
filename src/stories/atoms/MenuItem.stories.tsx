import React from 'react';
import { Story, Meta } from '@storybook/react/types-6-0';
import { MenuItem, IMenuItemProps } from '../../components/atoms';

export default {
  title: 'Atoms/Menu Item',
  component: MenuItem,
} as Meta;

export const menuItem: Story<IMenuItemProps> = (args) => (
  <MenuItem href="/" {...args}>
    Кнопка
  </MenuItem>
);