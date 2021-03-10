import React from 'react';
import { Story, Meta } from '@storybook/react/types-6-0';
import { Dropdown, IDropdownProps } from '../../components/atoms';

export default {
  title: 'Atoms/Dropdown',
  component: Dropdown,
} as Meta;

const anchor = (
  <div>
    The anchor content.
  </div>
);

export const dropdown: Story<IDropdownProps> = () => (
  <Dropdown anchor={anchor} side="bottom" align="right">
    <span>Hello world</span>
  </Dropdown>
);