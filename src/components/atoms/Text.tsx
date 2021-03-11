import React from 'react';
import styled, { ThemeContext } from 'styled-components';
import { getDefaultProps } from '../../helper';

/**
 * THe text props type.
 */
export interface ITextProps {

  /**
   * The color.
   */
  color?: string;

  /**
   * The size.
   */
  size?: number;

  /**
   * THe text weight.
   */
  weight?: 'thin' | 'light' | 'normal' | 'medium' | 'semi-bold' | 'bold' | 'extra-bold' | 'black';

  /**
   * The height.
   */
  height?: number;

  /**
   * The text.
   */
  children: string;

}

/**
 * The text atom.
 * @param props
 * @constructor
 */
function Text(props: ITextProps): React.ReactElement<ITextProps> {
  const theme = React.useContext(ThemeContext);

  const Tag = styled.div<ITextProps>`
    line-height: ${({ height }) => height}px;
    font-weight: ${({ weight }) => weight};
    font-size: ${({ size }) => size}px;
    color: ${({ color }) => color};
  `;

  return (
    <Tag
      {...getDefaultProps(props, {
        color: theme.dark.color.white,
        size: 16,
        weight: 'normal',
        height: 22
      })}
    />
  );
}

export default Text;