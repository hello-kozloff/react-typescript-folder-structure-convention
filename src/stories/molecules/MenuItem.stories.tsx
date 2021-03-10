import React from 'react';
import { Story, Meta } from '@storybook/react/types-6-0';
import { MenuItem, IMenuItemProps } from '../../components/molecules';
import { Badge } from '../../components/atoms';

export default {
  title: 'Molecules/Menu Item',
  component: MenuItem,
} as Meta;

export const menuItem: Story<IMenuItemProps> = (args) => (
  <MenuItem href="/" badge={<Badge>99+</Badge>} {...args}>
    Кнопка
  </MenuItem>
);