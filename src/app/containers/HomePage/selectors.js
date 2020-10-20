import { createSelector } from '@reduxjs/toolkit';

import { initialState } from './slice';

// First select the relevant part from the state
const selectDomain = state => state.homePage || initialState;

export const selectThing = createSelector(
  [selectDomain],
  homePageState => homePageState.thing,
);

export const selectThingLoading = createSelector(
  [selectDomain],
  homePageState => homePageState.loading,
);

export const selectThingError = createSelector(
  [selectDomain],
  homePageState => homePageState.error,
);

export const selectContactModalOpen = createSelector(
  [selectDomain],
  homePageState => homePageState.contactModalOpen,
);
