import React from 'react';
import { Box, Column, Input, Margin, Padding }  from '../atoms';
import { InputContainer, Row, ToggleContent } from '../molecules';

/**
 * The course-settings molecule.
 * @constructor
 */
export default function CourseSettings(): React.ReactElement {
  return (
    <>
      <Margin size={[20, 0, 20, 0]}>
        <Box>
          <Padding size={[30, 25, 30, 25]}>
            <Margin size={[0, 0, 24, 0]}>
              <Row gap={40}>
                <Column>
                  <InputContainer before="Дата старта продаж" required>
                    <Input mode="secondary" placeholder="Выберите дату" stretched />
                  </InputContainer>
                </Column>
                <Column>
                  <InputContainer before="Дата закрытия продаж" required>
                    <Input mode="secondary" placeholder="Выберите дату" stretched />
                  </InputContainer>
                </Column>
              </Row>
            </Margin>
            <Margin size={[24, 0, 0, 0]}>
              <Row>
                <Column>
                  <InputContainer before="Ссылка на групповой чат">
                    <Input mode="secondary" placeholder="Укажите ссылку на чат" stretched />
                  </InputContainer>
                </Column>
              </Row>
            </Margin>
          </Padding>
        </Box>
      </Margin>
      <Margin size={[20, 0, 20, 0]}>
        <Box>
          <Padding size={[30, 25, 0, 25]}>
            <ToggleContent label="Доступ к курсу после прохождения">
              <Margin size={[0, 0, 24, 0]}>
                <Row gap={40}>
                  <Column>
                    <InputContainer before="Дата старта продаж" required>
                      <Input mode="secondary" placeholder="Выберите дату" stretched />
                    </InputContainer>
                  </Column>
                  <Column>
                    <InputContainer before="Дата закрытия продаж" required>
                      <Input mode="secondary" placeholder="Выберите дату" stretched />
                    </InputContainer>
                  </Column>
                </Row>
              </Margin>
              <Margin size={[24, 0, 0, 0]}>
                <Row>
                  <Column>
                    <InputContainer before="Ссылка на групповой чат">
                      <Input mode="secondary" placeholder="Укажите ссылку на чат" stretched />
                    </InputContainer>
                  </Column>
                </Row>
              </Margin>
            </ToggleContent>
          </Padding>
        </Box>
      </Margin>
      <Margin size={[20, 0, 20, 0]}>
        <Box>
          <Padding size={[30, 25, 0, 25]}>
            <ToggleContent label="Доступ к курсу после прохождения">
              <Margin size={[0, 0, 24, 0]}>
                <Row gap={40}>
                  <Column>
                    <InputContainer before="Дата старта продаж" required>
                      <Input mode="secondary" placeholder="Выберите дату" stretched />
                    </InputContainer>
                  </Column>
                  <Column>
                    <InputContainer before="Дата закрытия продаж" required>
                      <Input mode="secondary" placeholder="Выберите дату" stretched />
                    </InputContainer>
                  </Column>
                </Row>
              </Margin>
              <Margin size={[24, 0, 0, 0]}>
                <Row>
                  <Column>
                    <InputContainer before="Ссылка на групповой чат">
                      <Input mode="secondary" placeholder="Укажите ссылку на чат" stretched />
                    </InputContainer>
                  </Column>
                </Row>
              </Margin>
            </ToggleContent>
          </Padding>
        </Box>
      </Margin>
    </>
  );
}