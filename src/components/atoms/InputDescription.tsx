import React from 'react';
import styled from 'styled-components';
import { getDefaultProps, clearInput } from '../../helper';

/**
 * The input-description props type.
 */
export type IInputDescriptionProps = React.TextareaHTMLAttributes<HTMLTextAreaElement>;

/**
 * The input-description atom.
 * @param props
 * @constructor
 */
export default function InputDescription(props: IInputDescriptionProps): React.ReactElement<IInputDescriptionProps> {
  const Tag = styled.textarea`
    ${clearInput};
    
    line-height: 22px;
    font-size: 14px;
  `;

  return (
    <Tag
      {...getDefaultProps<IInputDescriptionProps>(props, {
        placeholder: 'Введите описание'
      })}
    />
  );
}