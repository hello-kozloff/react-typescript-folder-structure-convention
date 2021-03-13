import React from 'react';
import styled, { ThemeContext } from 'styled-components';
import { useRoute } from 'react-router5';
import { Inline, Column, Margin } from '../atoms';
import { Row, Tab, ITabProps } from '../molecules';

/**
 * The tab-container type.
 */
export interface ITabContainerProps {

  /**
   * The array of tab's.
   */
  children: React.ComponentElement<ITabProps, any>[];

}

/**
 * The tab-container organism.
 * @param props
 * @constructor
 */
export default function TabContainer({
  children: content
}: ITabContainerProps): React.ReactElement<ITabContainerProps> {
  const { route: { params } } = useRoute();
  const active = params.tab as String;
  const theme = React.useContext(ThemeContext);

  const Tabbar = styled(Inline)`
    position: relative;
    
    &:after {
      content: "";
      
      position: absolute;
      right: 0;
      bottom: 1px;
      left: 0;
      
      border-radius: 30px;
      border-bottom: 2px solid ${theme.dark.color.white_05};
      display: grid;
    }
  `;

  /**
   * The function return true is active the tab.
   * @param tab
   */
  function isActive(tab: React.ComponentElement<ITabProps, any>): boolean {
    return tab.props.name === active;
  }

  /**
   * The function render tab.
   * @param tab
   * @param key
   */
  function renderTab(tab: React.ComponentElement<ITabProps, any>, key?: number): JSX.Element {
    return (
      <Column>
        <Tab
          key={key}
          {...tab.props}
          active={isActive(tab)}>
          {tab.props.children}
        </Tab>
      </Column>
    )
  }

  /**
   * The function render tabbar.
   */
  function renderTabbar(): JSX.Element | JSX.Element[] {
    return content.map((tab, key) => (
      renderTab(tab, key)
    ));
  }

  /**
   * The function return content.
   */
  function renderContent(): React.ReactNode[] {
    return content.map((tab) => (
      isActive(tab) && tab.props.children
    ));
  }

  return (
    <Inline direction="column" stretched>
      <Tabbar>
        <Row gap={24}>
          {renderTabbar()}
        </Row>
      </Tabbar>
      <Margin size={[30, 0, 0, 0]}>
        {renderContent()}
      </Margin>
    </Inline>
  );
}