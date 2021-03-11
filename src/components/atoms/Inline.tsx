import React from 'react';
import styled from 'styled-components';
import { getDefaultProps } from '../../helper';

/**
 * The inline props type.
 */
export interface IInlineProps {

  /**
   * The inline direction.
   * 'row' | 'column'
   */
  direction?: 'row' | 'column';

  /**
   * The content can be stretched.
   */
  stretched?: boolean;

  /**
   * The content align.
   */
  align?: 'flex-start' | 'center' | 'flex-end';

  /**
   * The tag content.
   */
  children: React.ReactNode | React.ReactNodeArray;

}

/**
 * This atom centers the content.
 * @param props
 * @constructor
 */
function Inline(props: IInlineProps): React.ReactElement<IInlineProps> {
  /**
   * The inline tag.
   */
  const Tag = styled.div<IInlineProps>`
    align-items: ${({ align }) => align};
    flex-direction: ${({ direction }) => direction};
    display: ${({ stretched }) => stretched ? 'flex' : 'inline-flex'};
  `;

  return (
    <Tag
      {...getDefaultProps<IInlineProps>(props, {
        direction: 'row'
      })}
    />
  );
}

export default Inline;