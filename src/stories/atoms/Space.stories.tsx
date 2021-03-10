import React from 'react';
import { Story, Meta } from '@storybook/react/types-6-0';
import { Space } from '../../components/atoms';

export default {
  title: 'Atoms/Space',
  component: Space,
} as Meta;

export const space: Story = () => <Space />;