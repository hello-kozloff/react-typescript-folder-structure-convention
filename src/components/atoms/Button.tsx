import React from 'react';
import styled, { css, ThemeContext } from 'styled-components';
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
   * The button mode property type.
   * 'primary' | 'secondary'
   */
  mode?: 'primary' | 'secondary';

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
  const theme = React.useContext(ThemeContext);

  /**
   * The button tag.
   */
  const Tag = styled.button<IButtonProps>`
    gap: 8px;
    align-items: center;
    grid-auto-flow: column;
    display: inline-grid;
    
    box-sizing: border-box;
    border-radius: 5px;
    border: 1px solid transparent;
    background: transparent;
    font: inherit;
    transition: ${theme.dark.transition.default};
    cursor: pointer;
    outline: none;
    
    ${({ mode }) => {
      switch (mode) {
        case 'primary': return css`
          color: ${theme.dark.color.white};
          background: ${theme.dark.color.primary};
          
          &:hover, &:focus {
            box-shadow: 3px 8px 20px rgba(50, 100, 239, .4);
          }
          
          &:active {
            background: rgb(50, 94, 220);
          }
        `;
        case 'secondary': return css``;
      }
    }};
    
    ${({ size }) => {
      switch (size) {
        case 'extra-small': return css``;
        case 'small': return css``;
        case 'medium': return css`
          padding: 12px 30px;
          line-height: 24px;
          font-size: 16px;
        `;
        case 'large': return css``;
        case 'extra-large': return css``;
      }
    }};
  `;

  return (
    <Tag
      {...getDefaultProps<IButtonProps>(props, {
        mode: 'primary',
        size: 'medium'
      })}
    />
  )
}

export default Button;