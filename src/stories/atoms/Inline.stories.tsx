import React from 'react';
import { Story, Meta } from '@storybook/react/types-6-0';
import { Inline, IInlineProps, Button } from '../../components/atoms';

export default {
  title: 'Atoms/Inline',
  component: Inline,
} as Meta;

export const inline: Story<IInlineProps> = (args) => (
  <Inline {...args}>
    <Button>
      Button 1
      <br/>
      Next level text
    </Button>
    <Button>
      Button 2
    </Button>
  </Inline>
);