import React from 'react';
import styled from 'styled-components';
import { Inline, IBadgeProps } from '../atoms';

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
   * THe badge content.
   */
  badge?: React.ComponentElement<IBadgeProps, any>;

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
  const { before, children: label, badge, after, ...otherProps } = props;

  const Tag = styled.a`

  `;

  const Before = styled.div`

  `;

  const Label = styled.span`
  
  `;

  const Badge = styled.div`

  `;

  const After = styled.div`

  `;

  return (
    <Tag {...otherProps}>
      <Inline>
        {before && <Before>{before}</Before>}
        <Label>{label}</Label>
        {badge && <Badge>{badge}</Badge>}
        {after && <After>{after}</After>}
      </Inline>
    </Tag>
  );
}