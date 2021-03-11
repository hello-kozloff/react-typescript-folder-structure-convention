import React from 'react';
import ReactDOM from 'react-dom';
import { ThemeProvider } from 'styled-components';
import theme from './theme';
import './styles/main.scss';

import { InputSearch } from './components/organisms';

function WelcomeScreen(): React.ReactElement {
  return <InputSearch />;
}

ReactDOM.render((
  <ThemeProvider theme={theme}>
    <WelcomeScreen />
  </ThemeProvider>
), document.getElementById('root'));