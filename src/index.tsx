import React from 'react';
import ReactDOM from 'react-dom';

function WelcomeScreen(): React.ReactElement {
  return (
    <h1 >Welcome to React Typescript Folder Structure convention</h1>
  );
}

ReactDOM.render(<WelcomeScreen />, document.getElementById('root'));