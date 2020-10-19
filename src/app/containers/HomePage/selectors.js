import { createSelector } from '@reduxjs/toolkit';

import { initialState } from './slice';

// First select the relevant part from the state
const selectDomain = state => state.homePage || initialState;

export const selectThing = createSelector(
  [selectDomain],
  githubRepoFormState => githubRepoFormState.thing,
);

export const selectThingLoading = createSelector(
  [selectDomain],
  githubRepoFormState => githubRepoFormState.loading,
);

export const selectThingError = createSelector(
  [selectDomain],
  githubRepoFormState => githubRepoFormState.error,
);
