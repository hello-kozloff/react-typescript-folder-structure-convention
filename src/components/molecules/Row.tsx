import React from 'react';
import styled from 'styled-components';
import { Width, IColumnProps } from '../atoms';

/**
 * The row props type.
 */
export interface IRowProps {

  /**
   * The columns gap.
   */
  gap?: number;

  /**
   * The row can render column or column array.
   */
  children: React.ComponentElement<IColumnProps, any> | React.ComponentElement<IColumnProps, any>[];

}

/**
 * The row molecule.
 * @param props
 * @constructor
 */
function Row(props: IRowProps): React.ReactElement<IRowProps> {
  /**
   * The function render column with margin.
   * @param column
   */
  function renderColumn(column: React.ComponentElement<IColumnProps, any>): JSX.Element {
    return (
      <Width size="100%">
        {column}
      </Width>
    );
  }

  /**
   * The function render columns
   */
  function renderColumns(): JSX.Element | JSX.Element[] {
    return Array.isArray(props.children) ? props.children.map((column) => {
      return renderColumn(column);
    }) : renderColumn(props.children);
  }

  const Tag = styled.div<IRowProps>`
    gap: ${({ gap }) => gap + 'px'};
    grid-auto-flow: column;
    display: grid;
  `;

  return (
    <Tag {...props}>
      {renderColumns()}
    </Tag>
  );
}

export default Row;