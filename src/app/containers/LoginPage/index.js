import React, { useEffect } from 'react';
import { Helmet } from 'react-helmet-async';
import { useSelector } from 'react-redux';
import { useHistory } from 'react-router-dom';

import { H1 } from 'app/components/Type';

import { selectUserAuthenticated } from 'app/data/user/selectors';

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

      <H1>Login</H1>
    </>
  );
}
