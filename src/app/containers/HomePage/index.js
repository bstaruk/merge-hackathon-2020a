import React from 'react';
import { Helmet } from 'react-helmet-async';

import Button from '@material-ui/core/Button';
import DeleteIcon from '@material-ui/icons/Delete';

import { H1 } from 'app/components/Type';
import { HeaderWrapper, TitleWrapper } from './wrappers';

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

      <HeaderWrapper>
        <TitleWrapper>
          <H1>Home Page</H1>
        </TitleWrapper>
        <div>
          <Button
            variant="contained"
            color="secondary"
            startIcon={<DeleteIcon />}
          >
            Delete
          </Button>
        </div>
      </HeaderWrapper>
    </>
  );
}
