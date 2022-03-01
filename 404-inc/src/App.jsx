import React from 'react';
import CssBaseline from '@mui/material/CssBaseline';
import { Provider as ReduxProvider } from 'react-redux';
import { ThemeProvider } from '@mui/material';
import PageRouter from './routing/page-router';
import store from './store';
import { lightTheme } from './styles/theme';

const App = () => (
  <ReduxProvider store={store}>
    <ThemeProvider theme={lightTheme}>
      <CssBaseline>
        <PageRouter />
      </CssBaseline>
    </ThemeProvider>
  </ReduxProvider>
);

export default App;
