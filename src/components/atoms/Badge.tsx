import React from 'react';
import styled from 'styled-components';

/**
 * The badge props type.
 */
export interface IBadgeProps {

  /**
   * The tag content.
   */
  children: string;

}

/**
 * The badge atom.
 * @param props
 * @constructor
 */
export default function Badge(props: IBadgeProps): React.ReactElement<IBadgeProps> {
  const Tag = styled.span`
    padding: 5px 7px;
  `;

  return <Tag {...props} />;
}