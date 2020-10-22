/**
 *
 * App
 *
 * This component is the skeleton around the actual pages, and should only
 * contain code that should be seen on all pages. (e.g. navigation bar)
 */

import * as React from 'react';
import { Helmet } from 'react-helmet-async';
import { Switch, Route, BrowserRouter } from 'react-router-dom';
import { ThemeProvider } from 'styled-components';
import { useInjectReducer, useInjectSaga } from 'utils/redux-injectors';
import CssBaseline from '@material-ui/core/CssBaseline';
import { createMuiTheme } from '@material-ui/core/styles';
import { ThemeProvider as MuiThemeProvider } from '@material-ui/styles';
import { teal } from '@material-ui/core/colors';

import { GlobalStyle } from 'styles/global-styles';
import primaryTheme from 'styles/theme/primary';

import { HomePage } from 'app/containers/HomePage/Loadable';
import { LoginPage } from 'app/containers/LoginPage/Loadable';
import { NotFoundPage } from 'app/components/NotFoundPage/Loadable';

import { sliceKey, reducer } from 'app/data/user/slice';
import { userSaga } from 'app/data/user/saga';

const theme = createMuiTheme({
  palette: {
    primary: {
      main: teal[600],
    },
    secondary: {
      main: teal[800],
    },
  },
});

export function App() {
  useInjectReducer({ key: sliceKey, reducer: reducer });
  useInjectSaga({ key: sliceKey, saga: userSaga });

  return (
    <BrowserRouter>
      <Helmet
        titleTemplate="%s | ReX"
        defaultTitle="ReX | Social Medicine Superapp"
      />

      <ThemeProvider theme={primaryTheme}>
        <MuiThemeProvider theme={theme}>
          <CssBaseline />
          <Switch>
            <Route exact path="/" component={LoginPage} />
            <Route exact path="/home" component={HomePage} />
            <Route component={NotFoundPage} />
          </Switch>
          <GlobalStyle />
        </MuiThemeProvider>
      </ThemeProvider>
    </BrowserRouter>
  );
}
