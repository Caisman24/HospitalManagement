import React, { Fragment } from 'react';
import Menu from './components/Common/Menu';
import './components/Common/Menu';
import { AuthProvider } from './contexts/AuthContext';

function App() {
  return (
    <Fragment>
      <AuthProvider>
        <Menu></Menu>
      </AuthProvider>
    </Fragment>
  );
}

export default App;
