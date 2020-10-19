import React, { useEffect, useState } from 'react';
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
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const userAuthenticated = useSelector(selectUserAuthenticated);
  const history = useHistory();

  useEffect(() => {
    if (userAuthenticated) {
      history.replace('/');
    }
  }, [history, userAuthenticated]);

  const onUsernameChange = e => {
    setUsername(e.target.value);
  };

  const onPasswordChange = e => {
    setPassword(e.target.value);
  };

  const onSubmit = e => {
    e.preventDefault();
    const payload = {
      username,
      password,
    };

    console.log('onSubmit', payload); // eslint-disable-line
  };

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
        <FormWrapper onSubmit={onSubmit}>
          <HeaderWrapper>
            <H1>Login</H1>
          </HeaderWrapper>

          <FormFieldWrapper>
            <TextField
              id="login-username"
              label="Email Address"
              variant="outlined"
              onChange={onUsernameChange}
              value={username}
              fullWidth
            />
          </FormFieldWrapper>
          <FormFieldWrapper>
            <TextField
              id="login-password"
              label="Password"
              variant="outlined"
              onChange={onPasswordChange}
              value={password}
              type="password"
              fullWidth
            />
          </FormFieldWrapper>

          <FormSubmitWrapper>
            <Button
              variant="contained"
              color="primary"
              size="large"
              type="submit"
            >
              Login
            </Button>
          </FormSubmitWrapper>
        </FormWrapper>
      </PageWrapper>
    </>
  );
}
