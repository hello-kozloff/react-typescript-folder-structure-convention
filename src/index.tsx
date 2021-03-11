import React from 'react';
import ReactDOM from 'react-dom';
import { ThemeProvider } from 'styled-components';
import theme from './theme';
import './styles/main.scss';

import { Input, Column } from './components/atoms';
import { InputContainer, Row } from './components/molecules';

function WelcomeScreen(): React.ReactElement {
  return (
    <Row gap={30}>
      <Column>
        <InputContainer before="Промокод" after="Оставьте поле пустым, если бессрочно" required>
          <Input stretched />
        </InputContainer>
      </Column>
      <Column>
        <InputContainer before="Промокод" after="Оставьте поле пустым, если бессрочно" required>
          <Input stretched />
        </InputContainer>
      </Column>
    </Row>
  );
}

ReactDOM.render((
  <ThemeProvider theme={theme}>
    <WelcomeScreen />
  </ThemeProvider>
), document.getElementById('root'));