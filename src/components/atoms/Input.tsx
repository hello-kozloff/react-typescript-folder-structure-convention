import React from 'react';
import styled, { css, ThemeContext } from 'styled-components';
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

  /**
   * The input can be stretched.
   */
  stretched?: boolean;

}

/**
 * The input atom.
 * Note: The atom render simple input element
 * @constructor
 */
function Input(props: IInputProps): React.ReactElement<IInputProps> {
  const theme = React.useContext(ThemeContext);

  /**
   * The input tag.
   */
  const Tag = styled.input<IInputProps>`
    width: ${({ stretched }) => stretched && '100%'};

    gap: 8px;
    align-items: center;
    grid-auto-flow: column;
    display: inline-grid;

    padding: 14px 16px;
    box-sizing: border-box;
    border: 1px solid transparent;
    transition: ${theme.dark.transition.default};
    border-radius: 5px;
    outline: none;
    
    line-height: 18px;
    font: inherit;
    color: ${theme.dark.color.white};
    
    ${({ mode }) => {
      switch (mode) {
        case 'primary': return css`
          background: ${theme.dark.color.dark};
          
          &::placeholder {
            color: ${theme.dark.color.white_40};
          }
        `;
        case 'secondary': return css`
          background: ${theme.dark.color.black_70};
          
          &::placeholder {
            color: ${theme.dark.color.white_20};
          }
        `;
      }
    }};
    
    &::placeholder {
      transition: ${theme.dark.transition.fast};
    }
    
    &:focus {
      border-color: ${theme.dark.color.primary};
    
      &::placeholder {
        opacity: 0;
      }
    }
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