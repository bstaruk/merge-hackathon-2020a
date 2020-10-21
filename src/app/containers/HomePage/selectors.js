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
