import React from 'react';
import styled, { css } from 'styled-components';
import { getDefaultProps } from '../../helper';

/**
 * The input props type.
 */
export interface IInputProps extends Omit<React.InputHTMLAttributes<HTMLInputElement>, 'type'> {

  /**
   * HTMLInputElement does not have the correct property type.
   * Correct property type from IntrinsicElements.
   */
  type?: JSX.IntrinsicElements['input']['type'];

  /**
   * The input mode property type.
   * 'primary' | 'secondary'
   */
  mode?: 'primary' | 'secondary';

}

/**
 * The input atom.
 * Note: The atom render simple input element
 * @constructor
 */
function Input(props: IInputProps): React.ReactElement<IInputProps> {
  /**
   * The input tag.
   */
  const Tag = styled.input<IInputProps>`
    gap: 8px;
    align-items: center;
    grid-auto-flow: column;
    display: inline-grid;
    
    ${({ mode }) => {
      switch (mode) {
        case 'primary': return css``;
        case 'secondary': return css``;
      }
    }};
  `;

  return (
    <Tag
      {...getDefaultProps<IInputProps>(props, {
        mode: 'primary'
      })}
    />
  );
}

export default Input;