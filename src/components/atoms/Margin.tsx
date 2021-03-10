import React from 'react';
import styled, { css } from 'styled-components';
import Repel from '../../types/Repel';

/**
 * The margin props type.
 */
export interface IMarginProps {

  /**
   * The repel size.
   * Top, Right, Bottom, Left
   */
  size?: (Repel.Top | Repel.Right | Repel.Bottom | Repel.Left)[];

  /**
   * The tag content.
   */
  children: React.ReactNode | React.ReactNodeArray;

}

/**
 * The atom add margin.
 * @param props
 * @constructor
 */
function Margin(props: IMarginProps): React.ReactElement<IMarginProps> {
  /**
   * The margin tag.
   */
  const Tag = styled.div<IMarginProps>`
    ${({ size }) => size && css`
      margin-top: ${size[Repel.Top]} px;
      margin-right: ${size[Repel.Right]} px;
      margin-bottom: ${size[Repel.Bottom]} px;
      margin-left: ${size[Repel.Left]} px;
    `};
  `;

  return <Tag {...props} />;
}

export default Margin;