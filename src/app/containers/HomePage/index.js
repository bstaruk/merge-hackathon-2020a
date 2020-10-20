import React, { useEffect } from 'react';
import { Helmet } from 'react-helmet-async';
import { useSelector, useDispatch } from 'react-redux';
import { useInjectReducer, useInjectSaga } from 'utils/redux-injectors';
import { useHistory } from 'react-router-dom';

import Button from '@material-ui/core/Button';
import DeleteIcon from '@material-ui/icons/Delete';

import { H1 } from 'app/components/Type';

import { selectUserAuthenticated } from 'app/data/user/selectors';
import { HeaderWrapper, TitleWrapper } from './wrappers';
import { selectThing, selectThingLoading } from './selectors';
import { sliceKey, reducer, actions } from './slice';
import { homePageSaga } from './saga';

export function HomePage() {
  useInjectReducer({ key: sliceKey, reducer: reducer });
  useInjectSaga({ key: sliceKey, saga: homePageSaga });

  const thing = useSelector(selectThing);
  const thingLoading = useSelector(selectThingLoading);
  const userAuthenticated = useSelector(selectUserAuthenticated);
  const history = useHistory();
  const dispatch = useDispatch();

  useEffect(() => {
    if (!userAuthenticated) {
      history.replace('/');
    }
  }, [history, userAuthenticated]);

  useEffect(() => {
    dispatch(actions.loadThing());
  }, [dispatch]);

  const onButtonClick = () => {
    dispatch(actions.loadThing());
  };

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
          <H1>Home Page {thing && `(${thing})`}</H1>
        </TitleWrapper>
        <div>
          <Button
            variant="contained"
            color="secondary"
            startIcon={<DeleteIcon />}
            onClick={onButtonClick}
            disabled={thingLoading}
          >
            {thingLoading ? 'Loading' : 'Do a thing'}
          </Button>
        </div>
      </HeaderWrapper>
    </>
  );
}
