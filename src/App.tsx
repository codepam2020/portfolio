import React from 'react';
import { ThemeProvider } from 'styled-components';
import theme from './theme';
import { Main } from './screens';


function App () {
  return (
    <ThemeProvider theme={theme.dark_theme}>
      <Main />
    </ThemeProvider>
  );
}

export default App;
