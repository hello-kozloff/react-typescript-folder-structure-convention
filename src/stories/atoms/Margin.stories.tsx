import React from 'react';
import { Story, Meta } from '@storybook/react/types-6-0';
import { Margin, IMarginProps, Button } from '../../components/atoms';

export default {
  title: 'Atoms/Margin',
  component: Margin,
} as Meta;

export const margin: Story<IMarginProps> = (args) => (
  <Margin {...args}>
    <Button>Button</Button>
  </Margin>
);