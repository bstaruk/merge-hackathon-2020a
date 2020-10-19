import { createSelector } from '@reduxjs/toolkit';

import { initialState } from './slice';

// First select the relevant part from the state
const selectDomain = state => state.homePage || initialState;

export const selectLoading = createSelector(
  [selectDomain],
  githubRepoFormState => githubRepoFormState.loading,
);

export const selectError = createSelector(
  [selectDomain],
  githubRepoFormState => githubRepoFormState.error,
);

export const selectThing = createSelector(
  [selectDomain],
  githubRepoFormState => githubRepoFormState.thing,
);
