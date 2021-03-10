import React from 'react';
import ReactDOM from 'react-dom';
import { InputSearch } from './components/organisms';

function WelcomeScreen(): React.ReactElement {
  return (
    <InputSearch />
  );
}

ReactDOM.render(<WelcomeScreen />, document.getElementById('root'));