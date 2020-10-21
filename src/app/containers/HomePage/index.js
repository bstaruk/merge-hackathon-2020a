import React, { useEffect, useState } from 'react';
import { Helmet } from 'react-helmet-async';
import { useSelector, useDispatch } from 'react-redux';
import { useInjectReducer } from 'utils/redux-injectors';
import { useHistory } from 'react-router-dom';

// import Box from '@material-ui/core/Box';
// import Button from '@material-ui/core/Button';
// import DeleteIcon from '@material-ui/icons/Delete';

import { H1 } from 'app/components/Type';

import { selectUser, selectUserAuthenticated } from 'app/data/user/selectors';
import ContactModal from './ContactModal';
import ReminderModal from './ReminderModal';
import Tabs from './Tabs';
import { PageWrapper, HeaderWrapper, TabsWrapper } from './wrappers';
import { selectContactModalOpen } from './selectors';
import { sliceKey, reducer, actions } from './slice';

export function HomePage() {
  useInjectReducer({ key: sliceKey, reducer: reducer });

  const [reminderModalOpen, setReminderModalOpen] = useState(false);
  const user = useSelector(selectUser);
  const userAuthenticated = useSelector(selectUserAuthenticated);
  const contactModalOpen = useSelector(selectContactModalOpen);
  const history = useHistory();
  const dispatch = useDispatch();

  useEffect(() => {
    if (!userAuthenticated) {
      history.replace('/');
    }
  }, [history, userAuthenticated]);

  useEffect(() => {
    const timer = setTimeout(() => setReminderModalOpen(true), 3000);
    return () => clearTimeout(timer);
  }, []);

  const onContactModalClose = () => {
    dispatch(actions.setContactModalOpen(false));
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
          <H1>Welcome, {user.firstName}!</H1>
        </HeaderWrapper>

        <TabsWrapper>
          <Tabs />
        </TabsWrapper>
      </PageWrapper>

      <ContactModal open={contactModalOpen} handleClose={onContactModalClose} />

      <ReminderModal
        open={reminderModalOpen}
        handleClose={() => setReminderModalOpen(false)}
      />
    </>
  );
}
