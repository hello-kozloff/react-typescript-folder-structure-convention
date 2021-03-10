import React from 'react';
import styled from 'styled-components';

/**
 * The menu-item props type.
 */
export interface IMenuItemProps extends React.InputHTMLAttributes<HTMLAnchorElement> {

  /**
   * The link locate.
   */
  href?: JSX.IntrinsicElements['link']['href'];

  /**
   * The before content. Use to insert icon.
   */
  before?: React.ReactNode;

  /**
   * The after content.
   */
  after?: React.ReactNode;

}

/**
 * The menu-item atom.
 * @param props
 * @constructor
 */
export default function MenuItem(props: IMenuItemProps): React.ReactElement<IMenuItemProps> {
  const { before, after, children: label, ...otherProps } = props;

  const Tag = styled.a`

  `;

  const Before = styled.div`

  `;

  const Label = styled.span`
  
  `;

  const After = styled.div`

  `;

  return (
    <Tag {...otherProps}>
      {before && <Before>{before}</Before>}
      <Label>{label}</Label>
      {after && <After>{after}</After>}
    </Tag>
  );
}