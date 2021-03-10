import React from 'react';
import { Story, Meta } from '@storybook/react/types-6-0';
import { InputSearch, IInputSearchProps } from '../../components/organisms';

export default {
  title: 'Organisms/Input Search',
  component: InputSearch,
} as Meta;

export const inputSearch: Story<IInputSearchProps> = (args) => (
  <InputSearch
    inputProps={{
      placeholder: 'Введите название'
    }}
    buttonProps={{
      children: 'Поиск'
    }}
    {...args}
  />
);