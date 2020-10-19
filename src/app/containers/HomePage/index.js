import React from 'react';
import { Helmet } from 'react-helmet-async';
import Button from '@material-ui/core/Button';
import DeleteIcon from '@material-ui/icons/Delete';

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
      <div>Home Page</div>
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
