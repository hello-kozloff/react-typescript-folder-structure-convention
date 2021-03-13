import React from 'react';
import ReactDOM from 'react-dom';
import { ThemeProvider } from 'styled-components';
import { RouterProvider } from 'react-router5';
import configureRouter from './router';
import { CourseEditor } from './components/organisms';
import theme from './theme';
import './styles/main.scss';

export const router = configureRouter();

ReactDOM.render((
  <RouterProvider router={router}>
    <ThemeProvider theme={theme}>
      <CourseEditor />
    </ThemeProvider>
  </RouterProvider>
), document.getElementById('root'));