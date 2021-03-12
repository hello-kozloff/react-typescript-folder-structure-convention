import React from 'react';
import styled from 'styled-components';

/**
 * The width props type.
 */
export interface IWidthProps {

  /**
   * The width size.
   */
  size: string;

  /**
   * The content.
   */
  children: React.ReactNode | React.ReactNodeArray;

}

/**
 * The width atom.
 * @param props
 * @constructor
 */
export default function Width(props: IWidthProps): React.ReactElement<IWidthProps> {
  const Tag = styled.div<IWidthProps>`
    width: ${({ size }) => size};
  `;
  return <Tag {...props} />;
}