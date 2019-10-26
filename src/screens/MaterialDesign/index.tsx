import React from 'react';
import { render } from 'react-dom';
import { createMuiTheme } from '@material-ui/core';
import { ThemeProvider } from '@material-ui/styles';
import Main from '../Main';
import '../../assets/style/base.scss';

const theme = createMuiTheme({
  palette: {
    primary: {
      main: '#075E55'
    },
    secondary: {
      main: '#FFF'
    },
    text: {
      secondary: 'rgba(255, 255, 255, 0.54)'
    }
  }
});

function Index(): JSX.Element {
  return (
    <ThemeProvider theme={theme}>
      <Main />
    </ThemeProvider>
  );
}

render(<Index />, document.getElementById('app'));
