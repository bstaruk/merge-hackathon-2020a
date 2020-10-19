import { createSlice } from 'utils/@reduxjs/toolkit';

export const initialState = {
  user: null,
  authenticated: false,
  loading: false,
  errors: [],
};

const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {
    login(state) {
      state.user = null;
      state.authenticated = false;
      state.loading = true;
      state.errors = [];
    },
    loginSuccess(state, action) {
      state.user = action.payload;
      state.authenticated = true;
      state.loading = false;
    },
    loginError(state, action) {
      state.loading = false;
      state.errors = action.payload;
    },
  },
});

export const { actions, reducer, name: sliceKey } = userSlice;
