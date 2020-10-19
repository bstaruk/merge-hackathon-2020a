import React, { useEffect } from 'react';
import { Helmet } from 'react-helmet-async';
import { useSelector } from 'react-redux';
import { useHistory } from 'react-router-dom';

import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';

import { H1 } from 'app/components/Type';

import { selectUserAuthenticated } from 'app/data/user/selectors';

import {
  PageWrapper,
  HeaderWrapper,
  FormWrapper,
  FormFieldWrapper,
  FormSubmitWrapper,
} from './wrappers';

export function LoginPage() {
  const userAuthenticated = useSelector(selectUserAuthenticated);
  const history = useHistory();

  useEffect(() => {
    if (userAuthenticated) {
      history.replace('/');
    }
  }, [history, userAuthenticated]);

  return (
    <>
      <Helmet>
        <title>Login</title>
        <meta
          name="description"
          content="MERGE Hackathon (October 2020) application homepage"
        />
      </Helmet>

      <PageWrapper>
        <FormWrapper>
          <HeaderWrapper>
            <H1>Login</H1>
          </HeaderWrapper>

          <FormFieldWrapper>
            <TextField
              id="login-email"
              label="Email Address"
              variant="outlined"
              fullWidth
            />
          </FormFieldWrapper>
          <FormFieldWrapper>
            <TextField
              id="login-password"
              label="Password"
              variant="outlined"
              type="password"
              fullWidth
            />
          </FormFieldWrapper>

          <FormSubmitWrapper>
            <Button variant="contained" color="primary" size="large">
              Login
            </Button>
          </FormSubmitWrapper>
        </FormWrapper>
      </PageWrapper>
    </>
  );
}
