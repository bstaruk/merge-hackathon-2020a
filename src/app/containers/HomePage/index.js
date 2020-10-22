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
import EducationModal from './EducationModal';
import Tabs from './Tabs';
import PageHeader from './PageHeader';
import PageFooter from './PageFooter';
import { PageWrapper, TabsWrapper } from './wrappers';
import {
  selectContactModalOpen,
  selectCommunityModalOpen,
  selectEducationModalOpen,
} from './selectors';
import { sliceKey, reducer, actions } from './slice';

export function HomePage() {
  useInjectReducer({ key: sliceKey, reducer: reducer });

  const [reminderModalOpen, setReminderModalOpen] = useState(true);
  const userAuthenticated = useSelector(selectUserAuthenticated);
  const contactModalOpen = useSelector(selectContactModalOpen);
  const communityModalOpen = useSelector(selectCommunityModalOpen);
  const educationModalOpen = useSelector(selectEducationModalOpen);
  const history = useHistory();
  const dispatch = useDispatch();

  useEffect(() => {
    if (!userAuthenticated) {
      history.replace('/');
    }
  }, [history, userAuthenticated]);

  const onContactModalClose = () => {
    dispatch(actions.setContactModalOpen(false));
  };

  const onCommunityModalClose = () => {
    dispatch(actions.setCommunityModalOpen({ open: false }));
  };

  const onEducationModalClose = () => {
    dispatch(actions.setEducationModalOpen(false));
  };

  if (!userAuthenticated) return null;

  return (
    <>
      <Helmet>
        <title>Dashboard</title>
      </Helmet>

      <PageWrapper>
        <PageHeader />

        <TabsWrapper>
          <Tabs />
        </TabsWrapper>

        <PageFooter />
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
      <EducationModal
        open={educationModalOpen}
        handleClose={onEducationModalClose}
      />
    </>
  );
}
