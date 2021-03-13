import React from 'react';
import ReactDOM from 'react-dom';
import { ThemeProvider, ThemeContext } from 'styled-components';
import theme from './theme';
import './styles/main.scss';

import {
  Inline,
  Container,
  Padding,
  Margin,
  Image,
  Input,
  InputTitle,
  InputDescription,
  Text,
  Space,
  Box,
  Column
} from './components/atoms';

import {
  UploadImage,
  Row,
  InputContainer
} from './components/molecules';

function CourseHeader(): React.ReactElement {
  const theme = React.useContext(ThemeContext);

  return (
    <Padding size={[0, 16, 0, 16]}>
      <Container>
        <Margin size={[40, 0, 35, 0]}>
          <Inline align="center" stretched>
            <Text size={18} weight="medium">Опубликован</Text>
            <Space />
            <Text color={theme.dark.color.white_40}>12 декабря 2020 - 12 января 2021</Text>
          </Inline>
        </Margin>
        <Margin size={[35, 0, 40, 0]}>
          <Inline align="flex-start" stretched>
            <Margin size={[0, 30, 0, 0]}>
              <Inline direction="column">
                <UploadImage radius="5px">
                  <Image
                    width="300px"
                    height="170px"
                    alt="Изображение курса"
                  />
                </UploadImage>
                <Margin size={[16, 0, 0, 0]}>
                  <Inline align="center">
                    <Margin size={[0, 10, 0, 0]}>
                      <Text
                        color={theme.dark.color.white_40}
                        size={14}
                        weight="medium">100</Text>
                    </Margin>
                    <Margin size={[0, 10, 0, 0]}>
                      <Text
                        color={theme.dark.color.white_40}
                        size={14}
                        weight="medium">100</Text>
                    </Margin>
                    <Margin size={[0, 10, 0, 0]}>
                      <Text
                        color={theme.dark.color.white_40}
                        size={14}
                        weight="medium">100</Text>
                    </Margin>
                  </Inline>
                </Margin>
                <Margin size={[16, 0, 0, 0]}>
                  <Input type="number" placeholder="Введите стоимость" stretched />
                </Margin>
              </Inline>
            </Margin>
            <Inline direction="column" stretched>
              <InputTitle />
              <Margin size={[16, 0, 0, 0]}>
                <InputDescription />
              </Margin>
            </Inline>
          </Inline>
        </Margin>
        <Margin size={[30, 0, 30, 0]}>
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
        </Margin>
      </Container>
    </Padding>
  );
}

ReactDOM.render((
  <ThemeProvider theme={theme}>
    <CourseHeader />
  </ThemeProvider>
), document.getElementById('root'));