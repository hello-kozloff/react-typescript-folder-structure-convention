import React from 'react';
import { Story, Meta } from '@storybook/react/types-6-0';
import { Badge, IBadgeProps } from '../../components/atoms';

export default {
  title: 'Atoms/Badge',
  component: Badge,
} as Meta;

export const badge: Story<IBadgeProps> = (args) => <Badge {...args}>99+</Badge>;