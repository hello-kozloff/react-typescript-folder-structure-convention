import React from 'react';
import styled from 'styled-components';

/**
 * The column props type.
 */
export interface IColumnProps {

  /**
   * The column content.
   */
  children: React.ReactNode;

}

/**
 * The column atom.
 * @param props
 * @constructor
 */
function Column(props: IColumnProps): React.ReactElement<IColumnProps> {
  const { children: content } = props;

  const Tag = styled.div`
    width: 100%;
  `;

  return (
    <Tag>
      {content}
    </Tag>
  );
}

export default Column;