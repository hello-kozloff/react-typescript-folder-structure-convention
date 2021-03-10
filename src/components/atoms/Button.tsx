import React from 'react';
import styled, { css } from 'styled-components';
import { getDefaultProps } from '../../helper';

/**
 * The button props type.
 */
export interface IButtonProps extends Omit<React.InputHTMLAttributes<HTMLButtonElement>, 'type' | 'size'> {

  /**
   * HTMLButtonElement does not have the correct property type.
   * Correct property type from IntrinsicElements.
   */
  type?: JSX.IntrinsicElements['button']['type'];

  /**
   * The button theme property type.
   * 'primary' | 'secondary'
   */
  theme?: 'primary' | 'secondary';

  /**
   * The button size property type.
   * 'extra-small' | 'small' | 'medium' | 'large' | 'extra-large'
   */
  size?: 'extra-small' | 'small' | 'medium' | 'large' | 'extra-large';

}

/**
 * The button atom.
 * Note: The atom render simple button element
 * @constructor
 */
function Button(props: IButtonProps): React.ReactElement<IButtonProps> {
  /**
   * The button tag.
   */
  const Tag = styled.button<IButtonProps>`
    gap: 8px;
    align-items: center;
    grid-auto-flow: column;
    display: inline-grid;
    
    ${({ theme }) => {
      switch (theme) {
        case 'primary': return css``;
        case 'secondary': return css``;
      }
    }};
    
    ${({ size }) => {
      switch (size) {
        case 'extra-small': return css``;
        case 'small': return css``;
        case 'medium': return css``;
        case 'large': return css``;
        case 'extra-large': return css``;
      }
    }};
  `;

  return (
    <Tag
      {...getDefaultProps<IButtonProps>(props, {
        theme: 'primary',
        size: 'medium'
      })}
    />
  )
}

export default Button;