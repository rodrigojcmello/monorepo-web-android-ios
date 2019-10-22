import React from 'react';
import { render } from 'react-dom';
import { AppBar, Toolbar, Typography } from '@material-ui/core';
import Register from './screens/Register';
import Main from './screens/Main';

function Index(): JSX.Element {
  return (
    <div>
      {/*<AppBar>*/}
      {/*  <Toolbar>*/}
      {/*    <Typography variant="h6">WhatsApp</Typography>*/}
      {/*  </Toolbar>*/}
      {/*</AppBar>*/}
      <Main />
      <div>WhatsApp PoC 123 456</div>
      <Register />
    </div>
  );
}

render(<Index />, document.getElementById('app'));
