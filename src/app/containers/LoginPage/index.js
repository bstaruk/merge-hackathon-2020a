import React, { useEffect, useState } from 'react';
import { Helmet } from 'react-helmet-async';
import { useSelector, useDispatch } from 'react-redux';
import { useHistory } from 'react-router-dom';

import FormControl from '@material-ui/core/FormControl';
import FormHelperText from '@material-ui/core/FormHelperText';
import InputLabel from '@material-ui/core/InputLabel';
import OutlinedInput from '@material-ui/core/OutlinedInput';
import Button from '@material-ui/core/Button';
import LinearProgress from '@material-ui/core/LinearProgress';
import Link from '@material-ui/core/Link';
import Typography from '@material-ui/core/Typography';

import { H1 } from 'app/components/Type';

import {
  selectUserAuthenticated,
  selectUserErrors,
  selectUserLoading,
} from 'app/data/user/selectors';
import { actions as userActions } from 'app/data/user/slice';

import {
  LoadingWrapper,
  PageWrapper,
  HeaderWrapper,
  FormWrapper,
  FormFieldWrapper,
  FormSubmitWrapper,
  PrePopWrapper,
} from './wrappers';

export function LoginPage() {
  const [email, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const userAuthenticated = useSelector(selectUserAuthenticated);
  const userLoading = useSelector(selectUserLoading);
  const userErrors = useSelector(selectUserErrors);
  const history = useHistory();
  const dispatch = useDispatch();

  useEffect(() => {
    if (userAuthenticated) {
      history.replace('/home');
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
      email,
      password,
    };

    dispatch(userActions.login(payload));
  };

  const onPrePopClick = () => {
    setUsername('bob@mergeworld.com');
    setPassword('abc123');
  };

  const onClearClick = () => {
    setUsername('');
    setPassword('');
  };

  const emailError =
    userErrors.filter(e => e.field === 'email').length > 0
      ? userErrors.filter(e => e.field === 'email')[0]
      : null;
  const passwordError =
    userErrors.filter(e => e.field === 'password').length > 0
      ? userErrors.filter(e => e.field === 'password')[0]
      : null;

  return (
    <>
      <Helmet>
        <title>Login</title>
        <meta
          name="description"
          content="MERGE Hackathon (October 2020) application homepage"
        />
      </Helmet>

      <LoadingWrapper loading={userLoading ? 1 : undefined}>
        <LinearProgress />
      </LoadingWrapper>
      <PageWrapper>
        <FormWrapper onSubmit={onSubmit}>
          <HeaderWrapper>
            <H1>Login</H1>
          </HeaderWrapper>

          <FormFieldWrapper>
            <FormControl variant="outlined" fullWidth error={!!emailError}>
              <InputLabel htmlFor="email">Email Address</InputLabel>
              <OutlinedInput
                id="email"
                label="Email Address"
                onChange={onUsernameChange}
                value={email}
                aria-describedby={
                  emailError ? 'component-error-text' : undefined
                }
              />
              {emailError && (
                <FormHelperText id="component-error-text">
                  {emailError.message}
                </FormHelperText>
              )}
            </FormControl>
          </FormFieldWrapper>

          <FormFieldWrapper>
            <FormControl variant="outlined" fullWidth error={!!passwordError}>
              <InputLabel htmlFor="password">Password</InputLabel>
              <OutlinedInput
                id="password"
                label="Password"
                type="password"
                onChange={onPasswordChange}
                value={password}
                aria-describedby={
                  passwordError ? 'component-error-text' : undefined
                }
              />
              {passwordError && (
                <FormHelperText id="component-error-text">
                  {passwordError.message}
                </FormHelperText>
              )}
            </FormControl>
          </FormFieldWrapper>

          <FormSubmitWrapper>
            <Button
              variant="contained"
              color="primary"
              size="large"
              type="submit"
              disabled={userLoading}
            >
              Login
            </Button>
          </FormSubmitWrapper>
        </FormWrapper>

        <PrePopWrapper>
          <Typography variant="body2" color="textSecondary">
            <Link href="#" onClick={onPrePopClick} color="inherit" size="small">
              pre-populate
            </Link>
            {' / '}
            <Link href="#" onClick={onClearClick} color="inherit" size="small">
              clear
            </Link>
          </Typography>
        </PrePopWrapper>
      </PageWrapper>
    </>
  );
}
