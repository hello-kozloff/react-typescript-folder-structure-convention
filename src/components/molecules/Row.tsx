import React from 'react';
import styled from 'styled-components';
import { Inline, Margin, IColumnProps } from '../atoms';

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
  const splitGap = props.gap ? props.gap / 2 : 0;

  /**
   * The function render column with margin.
   * @param column
   */
  function renderColumn(column: React.ComponentElement<IColumnProps, any>): JSX.Element {
    const MarginContainer = styled(Margin)`
      width: 100%;
    `;

    return (
      <MarginContainer size={[0, splitGap, 0, splitGap]}>
        {column}
      </MarginContainer>
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

  const InlineContainer = styled(Inline)`
    margin-left: ${splitGap}px;
    margin-right: ${splitGap}px;
  `;

  return (
    <InlineContainer stretched>
      {renderColumns()}
    </InlineContainer>
  );
}

export default Row;