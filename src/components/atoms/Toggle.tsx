import React from 'react';
import styled, { css, ThemeContext } from 'styled-components';
import { getDefaultProps } from '../../helper';

/**
 * The toggle props type.
 */
export interface IToggleProps extends React.InputHTMLAttributes<HTMLInputElement> {

  /**
   * The button mode property type.
   * 'primary' | 'secondary'
   */
  mode?: 'primary' | 'secondary';

}

/**
 * The toggle atom.
 * @param props
 * @constructor
 */
export default function Toggle(props: IToggleProps): React.ReactElement<IToggleProps> {
  const theme = React.useContext(ThemeContext);

  const Container = styled.label`
    cursor: pointer;  
  `;

  const Input = styled.input`
    position: absolute;
    opacity: 0;
    
    &:checked + * {
      background-color: ${theme.dark.color.primary};
      
      & > * {
        transform: translateX(20px);
        background-color: ${theme.dark.color.white};   
      }
    }
    
    &:focus + * {
      box-shadow: 0 0 0 4px ${theme.dark.color.primary_30};
    }
  `;

  const Wrapper = styled.div<IToggleProps>`
    position: relative;
    
    box-sizing: border-box;
    padding: 0 2px;
    border-radius: 30px;
    
    height: 20px;
    width: 40px;
    
    align-items: center;
    display: flex;
    
    ${({ mode }) => {
      switch (mode) {
        case 'primary': return css`
          background-color: ${theme.dark.color.dark};
        `;
        case 'secondary': return css`
          background-color: ${theme.dark.color.black};
        `;
      }
    }};
  `;

  const Round = styled.div`
    transition: ${theme.dark.transition.default};
    background-color: ${theme.dark.color.white_40};
    border-radius: 50%;
    height: 16px;
    width: 16px;
    display: flex;
  `;

  return (
    <Container>
      <Input {...props} type="checkbox" />
      <Wrapper {...getDefaultProps(props, { mode: 'primary' })}>
        <Round />
      </Wrapper>
    </Container>
  );
}