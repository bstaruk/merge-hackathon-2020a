import React from 'react';
import { Helmet } from 'react-helmet-async';

import { H1 } from 'app/components/Type';

export function LoginPage() {
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
