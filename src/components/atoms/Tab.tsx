import React from 'react';

/**
 * The tab atom.
 */
export interface ITabProps {

  /**
   * The uniq tab name.
   */
  name: string;

  /**
   * The tab label.
   */
  label: string;

  /**
   * The tag can be active.
   */
  active?: boolean;

  /**
   * The tab content.
   */
  children: React.ReactNode | React.ReactNodeArray;

}

/**
 * The tab atom.
 * @param props
 * @constructor
 */
export default function Tab(props: ITabProps): undefined {
  return undefined;
}