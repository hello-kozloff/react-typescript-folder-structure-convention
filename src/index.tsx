import React from 'react';
import ReactDOM from 'react-dom';
import { InputSearch } from './components/organisms';

function WelcomeScreen(): React.ReactElement {
  return (
    <InputSearch />
    /**
     Note: Want to replace some property of the child element? You are welcome!
     Example:
     <InputSearch
      marginProps={{
        size: [0, 0, 0, 12]
      }}
     />
     */
  );
}

ReactDOM.render(<WelcomeScreen />, document.getElementById('root'));