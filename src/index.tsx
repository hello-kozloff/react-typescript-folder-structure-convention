import React from 'react';
import ReactDOM from 'react-dom';
import { ThemeProvider } from 'styled-components';
import theme from './theme';
import './styles/main.scss';

import { Inline, Container, Padding, Margin, Image, InputTitle, InputDescription } from './components/atoms';
import { UploadImage } from './components/molecules';

function CourseHeader(): React.ReactElement {
  return (
    <Padding size={[0, 16, 0, 16]}>
      <Container>
        <Margin size={[35, 0, 40, 0]}>
          <Inline align="flex-start" stretched>
            <Margin size={[0, 30, 0, 0]}>
              <Inline direction="column">
                <UploadImage radius="5px">
                  <Image width="300px" height="170px" alt="Изображение курса" />
                </UploadImage>
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