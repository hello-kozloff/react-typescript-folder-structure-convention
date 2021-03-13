import React from 'react';
import { useRoute } from 'react-router5';
import styled, { ThemeContext } from 'styled-components';
import { Padding, Text } from '../atoms';

/**
 * The tab molecule.
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
export default function Tab({
  name,
  label,
  active
}: ITabProps): React.ReactElement<ITabProps> {
  const { route: { name: routeName }, router: { navigate } } = useRoute();
  const theme = React.useContext(ThemeContext);

  const Tag = styled.button<Pick<ITabProps, 'active'>>`
    position: relative;
    z-index: 5;
    padding: 0;
    border: none;
    background: transparent;
    outline: none;
    cursor: pointer;
    
    &:after {
      content: "";
        
      border-radius: 30px;
      border-bottom: 4px solid ${({ active }) => active ? theme.dark.color.primary : 'transparent'};
      display: grid;
    }
    
    &:focus > * > * {
      outline: 2px solid ${theme.dark.color.primary};
      outline-offset: 12px;
    }
  `;

  /**
   * The handle click tab.
   */
  function handleClick(): void {
    navigate(routeName, {
      tab: name
    });
  }

  return (
    <Tag active={active} onClick={handleClick}>
      <Padding size={[0, 0, 24, 0]}>
        <Text color={active ? theme.dark.color.white : theme.dark.color.white_40}>
          {label}
        </Text>
      </Padding>
    </Tag>
  );
}