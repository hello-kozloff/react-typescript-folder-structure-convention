import React from 'react';
import { Container, Margin, Padding } from '../atoms';
import { CourseSettings, Tab, CourseHeader } from '../molecules';
import { TabContainer } from '../organisms';

/**
 * The course-editor organism.
 * @constructor
 */
export default function CourseEditor(): React.ReactElement {
  return (
    <Padding size={[0, 16, 0, 16]}>
      <Container>
        <CourseHeader />
        <Margin size={[40, 0, 40, 0]}>
          <TabContainer>
            <Tab name="settings" label="Настройки">
              <CourseSettings />
            </Tab>
            <Tab name="content" label="Содержание">
              <h1>Hello world</h1>
            </Tab>
          </TabContainer>
        </Margin>
      </Container>
    </Padding>
  );
}