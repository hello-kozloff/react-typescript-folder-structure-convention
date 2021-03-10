import React from 'react';
import styled, { css } from 'styled-components';
import { getDefaultProps } from '../../helper';

/**
 * The dropdown props type.
 */
export interface IDropdownProps {

  /**
   * Anchor to which the dropdown sheet is attached.
   */
  anchor: React.ReactNode;

  /**
   * The gap.
   */
  gap?: number;

  /**
   * The side.
   * 'top' | 'right' | 'bottom' | 'left'
   */
  side: 'top' | 'right' | 'bottom' | 'left';

  /**
   * The align.
   * 'left' | 'right'
   */
  align: 'left' | 'right';

  /**
   * The dropdown content.
   */
  children: React.ReactNode | React.ReactNodeArray;

}

/**
 * The dropdown atom.
 * @param props
 * @constructor
 */
export default function Dropdown(props: IDropdownProps): React.ReactElement<IDropdownProps> {
  const { anchor, children: content } = props;

  const Anchor = styled.div`
    position: relative;
    display: inline-block;
  `;

  const Content = styled.div<IDropdownProps>`
    position: absolute;
    z-index: 999;
    
    ${({ side, gap }) => {
      switch (side) {
        case 'top': return css`
          bottom: 100%;
          padding-bottom: ${gap}px;
        `;
        case 'right': return css`
          left: 100%;
          padding-left: ${gap}px;
        `;
        case 'bottom': return css`
          top: 100%;
          padding-top: ${gap}px;
        `;
        case 'left': return css`
          right: 100%;
          padding-right: ${gap}px;
        `;
      }
    }};
    
    ${({ align }) => {
      switch (align) {
        case 'left': return css`
          left: 0;
        `;
        case 'right': return css`
          right: 0;
        `;
      }
    }};
  `;

  const defaultProps = {
    anchor,
    gap: 12,
    side: props.side,
    align: props.align
  }

  return (
    <Anchor>
      {anchor}
      <Content {...getDefaultProps(props, defaultProps)}>{content}</Content>
    </Anchor>
  );
}