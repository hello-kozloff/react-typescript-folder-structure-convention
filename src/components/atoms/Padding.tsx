import React from 'react';
import styled, { css } from 'styled-components';
import Repel from '../../types/Repel';

/**
 * The padding props type.
 */
export interface IPaddingProps {

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
 * The atom add padding.
 * @param props
 * @constructor
 */
function Padding(props: IPaddingProps): React.ReactElement<IPaddingProps> {
  /**
   * The padding tag.
   */
  const Tag = styled.div<IPaddingProps>`
    ${({ size }) => size && css`
      padding-top: ${size[Repel.Top]}px;
      padding-right: ${size[Repel.Right]}px;
      padding-bottom: ${size[Repel.Bottom]}px;
      padding-left: ${size[Repel.Left]}px;
    `};
  `;

  return <Tag {...props} />;
}

export default Padding;