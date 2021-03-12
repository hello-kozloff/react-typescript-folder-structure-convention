import React from 'react';
import styled from 'styled-components';
import { getDefaultProps, clearInput } from '../../helper';

/**
 * The input-title props type.
 */
export type IInputTitleProps = Omit<React.InputHTMLAttributes<HTMLInputElement>, 'type'>;

/**
 * The input-title atom.
 * @param props
 * @constructor
 */
export default function InputTitle(props: IInputTitleProps): React.ReactElement<IInputTitleProps> {
  const Tag = styled.input`
    ${clearInput};
    
    line-height: 30px;
    font-weight: bold;
    font-size: 24px;
    
    width: 100%;
  `;

  return (
    <Tag
      type="text"
      {...getDefaultProps<IInputTitleProps>(props, {
        placeholder: 'Введите название'
      })}
    />
  );
}