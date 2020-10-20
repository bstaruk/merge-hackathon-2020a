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

import { GlobalStyle } from 'styles/global-styles';
import primaryTheme from 'styles/theme/primary';

import { HomePage } from 'app/containers/HomePage/Loadable';
import { LoginPage } from 'app/containers/LoginPage/Loadable';
import { NotFoundPage } from 'app/components/NotFoundPage/Loadable';

import { sliceKey, reducer } from 'app/data/user/slice';
import { userSaga } from 'app/data/user/saga';

export function App() {
  useInjectReducer({ key: sliceKey, reducer: reducer });
  useInjectSaga({ key: sliceKey, saga: userSaga });

  return (
    <BrowserRouter>
      <Helmet
        titleTemplate="%s - MERGE Hackathon"
        defaultTitle="MERGE Hackathon"
      >
        <meta
          name="description"
          content="MERGE Hackathon (October 2020) application"
        />
      </Helmet>

      <ThemeProvider theme={primaryTheme}>
        <Switch>
          <Route exact path="/" component={HomePage} />
          <Route exact path="/login" component={LoginPage} />
          <Route component={NotFoundPage} />
        </Switch>
        <GlobalStyle />
      </ThemeProvider>
    </BrowserRouter>
  );
}
