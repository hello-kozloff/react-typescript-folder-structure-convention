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
  InputTitle,
  InputDescription,
  Text,
  Input,
  Space
} from './components/atoms';

import {
  UploadImage
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
      </Container>
    </Padding>
  );
}

ReactDOM.render((
  <ThemeProvider theme={theme}>
    <CourseHeader />
  </ThemeProvider>
), document.getElementById('root'));