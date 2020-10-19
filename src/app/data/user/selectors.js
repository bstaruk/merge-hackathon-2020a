import { createSelector } from '@reduxjs/toolkit';

import { initialState } from './slice';

// First select the relevant part from the state
const selectDomain = state => state.user || initialState;

export const selectUser = createSelector(
  [selectDomain],
  githubRepoFormState => githubRepoFormState.user,
);

export const selectUserLoading = createSelector(
  [selectDomain],
  githubRepoFormState => githubRepoFormState.loading,
);

export const selectUserAuthenticated = createSelector(
  [selectDomain],
  githubRepoFormState => githubRepoFormState.authenticated,
);

export const selectUserErrors = createSelector(
  [selectDomain],
  githubRepoFormState => githubRepoFormState.errors,
);
