import React from 'react';
import styled, { ThemeContext } from 'styled-components';

/**
 * The box props type.
 */
export interface IBoxProps {

  /**
   * The box content.
   */
  children: React.ReactNode | React.ReactNodeArray;

}

/**
 * The box atom.
 * @param props
 * @constructor
 */
export default function Box(props: IBoxProps): React.ReactElement<IBoxProps> {
  const theme = React.useContext(ThemeContext);

  const Box = styled.div<IBoxProps>`
     border-radius: 5px;
     background-color: ${theme.dark.color.dark};
     border: 1px solid ${theme.dark.color.white_08};
     box-shadow: 3px 10px 20px rgba(40, 43, 52, .1);
  `;

  return <Box {...props} />;
};