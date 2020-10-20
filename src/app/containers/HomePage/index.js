import React, { useEffect } from 'react';
import { Helmet } from 'react-helmet-async';
import { useSelector, useDispatch } from 'react-redux';
import { useInjectReducer, useInjectSaga } from 'utils/redux-injectors';
import { useHistory } from 'react-router-dom';

import Button from '@material-ui/core/Button';
import DeleteIcon from '@material-ui/icons/Delete';

import { H1 } from 'app/components/Type';

import { selectUser, selectUserAuthenticated } from 'app/data/user/selectors';
import Tabs from './Tabs';
import {
  PageWrapper,
  HeaderWrapper,
  TitleWrapper,
  ButtonWrapper,
  TabsWrapper,
} from './wrappers';
import { selectThing, selectThingLoading } from './selectors';
import { sliceKey, reducer, actions } from './slice';
import { homePageSaga } from './saga';

export function HomePage() {
  useInjectReducer({ key: sliceKey, reducer: reducer });
  useInjectSaga({ key: sliceKey, saga: homePageSaga });

  const thing = useSelector(selectThing);
  const thingLoading = useSelector(selectThingLoading);
  const user = useSelector(selectUser);
  const userAuthenticated = useSelector(selectUserAuthenticated);
  const history = useHistory();
  const dispatch = useDispatch();

  useEffect(() => {
    if (!userAuthenticated) {
      history.replace('/');
    }
  }, [history, userAuthenticated]);

  const onButtonClick = () => {
    dispatch(actions.loadThing());
  };

  if (!userAuthenticated) return null;

  return (
    <>
      <Helmet>
        <title>Home Page</title>
        <meta
          name="description"
          content="MERGE Hackathon (October 2020) application homepage"
        />
      </Helmet>

      <PageWrapper>
        <HeaderWrapper>
          <TitleWrapper>
            <H1>Welcome, {user.firstName}!</H1>
          </TitleWrapper>
        </HeaderWrapper>

        <ButtonWrapper>
          <Button
            variant="contained"
            color="primary"
            size="large"
            startIcon={<DeleteIcon />}
            onClick={onButtonClick}
            disabled={thingLoading}
          >
            {thingLoading ? 'Loading a thing' : 'Load a thing'}
          </Button>
          {thing && <p>{`(${thing})`}</p>}
        </ButtonWrapper>

        <TabsWrapper>
          <Tabs />
        </TabsWrapper>
      </PageWrapper>
    </>
  );
}
