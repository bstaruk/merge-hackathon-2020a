import React from 'react';
import { Helmet } from 'react-helmet-async';
import Button from '@material-ui/core/Button';
import DeleteIcon from '@material-ui/icons/Delete';

export function HomePage() {
  return (
    <>
      <Helmet>
        <title>Home Page</title>
        <meta name="description" content="A Boilerplate application homepage" />
      </Helmet>
      <div>HomePage container</div>
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
