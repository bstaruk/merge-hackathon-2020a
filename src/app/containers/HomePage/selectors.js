import { createSelector } from '@reduxjs/toolkit';

import { initialState } from './slice';

// First select the relevant part from the state
const selectDomain = state => state.homePage || initialState;

export const selectActiveTab = createSelector(
  [selectDomain],
  homePageState => homePageState.activeTab,
);

export const selectContactModalOpen = createSelector(
  [selectDomain],
  homePageState => homePageState.contactModalOpen,
);

export const selectAdviceLiked = createSelector(
  [selectDomain],
  homePageState => homePageState.adviceLiked,
);

export const selectAdviceDismissed = createSelector(
  [selectDomain],
  homePageState => homePageState.adviceDismissed,
);

export const selectCommunityModalOpen = createSelector(
  [selectDomain],
  homePageState => homePageState.communityModalOpen,
);

export const selectCommunityModalMed = createSelector(
  [selectDomain],
  homePageState => homePageState.communityModalMed,
);

export const selectCommunityModalMood = createSelector(
  [selectDomain],
  homePageState => homePageState.communityModalMood,
);

export const selectMedCardExpanded = createSelector(
  [selectDomain],
  homePageState => homePageState.medCardExpanded,
);

export const selectEducationModalOpen = createSelector(
  [selectDomain],
  homePageState => homePageState.educationModalOpen,
);
