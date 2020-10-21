import React, { useEffect, useState } from 'react';
import { Helmet } from 'react-helmet-async';
import { useSelector, useDispatch } from 'react-redux';
import { useInjectReducer } from 'utils/redux-injectors';
import { useHistory } from 'react-router-dom';

// import Box from '@material-ui/core/Box';
// import Button from '@material-ui/core/Button';
// import DeleteIcon from '@material-ui/icons/Delete';

import { selectUserAuthenticated } from 'app/data/user/selectors';
import ContactModal from './ContactModal';
import CommunityModal from './CommunityModal';
import ReminderModal from './ReminderModal';
import Tabs from './Tabs';
import PageHeader from './PageHeader';
import { PageWrapper, TabsWrapper } from './wrappers';
import { selectContactModalOpen, selectCommunityModalOpen } from './selectors';
import { sliceKey, reducer, actions } from './slice';

export function HomePage() {
  useInjectReducer({ key: sliceKey, reducer: reducer });

  const [reminderModalOpen, setReminderModalOpen] = useState(false);
  const userAuthenticated = useSelector(selectUserAuthenticated);
  const contactModalOpen = useSelector(selectContactModalOpen);
  const communityModalOpen = useSelector(selectCommunityModalOpen);
  const history = useHistory();
  const dispatch = useDispatch();

  useEffect(() => {
    if (!userAuthenticated) {
      history.replace('/');
    }
  }, [history, userAuthenticated]);

  useEffect(() => {
    const timer = setTimeout(() => setReminderModalOpen(true), 1000);
    return () => clearTimeout(timer);
  }, []);

  const onContactModalClose = () => {
    dispatch(actions.setContactModalOpen(false));
  };

  const onCommunityModalClose = () => {
    dispatch(actions.setCommunityModalOpen({ open: false }));
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
        <PageHeader />

        <TabsWrapper>
          <Tabs />
        </TabsWrapper>
      </PageWrapper>

      <ContactModal open={contactModalOpen} handleClose={onContactModalClose} />
      <CommunityModal
        open={communityModalOpen}
        handleClose={onCommunityModalClose}
      />
      <ReminderModal
        open={reminderModalOpen}
        handleClose={() => setReminderModalOpen(false)}
      />
    </>
  );
}
