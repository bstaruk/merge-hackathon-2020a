import React from 'react';
import { Helmet } from 'react-helmet-async';

import Button from '@material-ui/core/Button';
import DeleteIcon from '@material-ui/icons/Delete';

import { H1 } from 'app/components/Type';

export function HomePage() {
  return (
    <>
      <Helmet>
        <title>Home Page</title>
        <meta
          name="description"
          content="MERGE Hackathon (October 2020) application homepage"
        />
      </Helmet>
      <H1>Home Page</H1>
      <div>
        <Button
          variant="contained"
          color="secondary"
          startIcon={<DeleteIcon />}
        >
          Delete
        </Button>
      </div>
    </>
  );
}
