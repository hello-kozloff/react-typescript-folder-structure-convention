import React from 'react';
import styled from 'styled-components';
import { getDefaultProps } from '../../helper';

/**
 * The container props type.
 */
export interface IContainerProps {

  /**
   * The content max width.
   */
  maxWidth?: string;

  /**
   * The content.
   */
  children: React.ReactNode | React.ReactNodeArray;

}

/**
 * The container atom.
 * @param props
 * @constructor
 */
export default function Container(props: IContainerProps): React.ReactElement<IContainerProps> {
  const Tag = styled.div<IContainerProps>`
    max-width: ${({ maxWidth }) => maxWidth};
    box-sizing: border-box;
    margin: 0 auto;
  `;

  return (
    <Tag
      {...getDefaultProps(props, {
        maxWidth: '930px'
      })}
    />
  );
}