import { createSlice } from 'utils/@reduxjs/toolkit';

export const initialState = {
  user: null,
  authenticated: false,
  loading: false,
  error: null,
};

const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {
    login(state) {
      state.user = null;
      state.authenticated = false;
      state.loading = true;
      state.error = null;
    },
    loginSuccess(state, action) {
      state.user = action.payload;
      state.authenticated = true;
      state.loading = false;
    },
    loginError(state, action) {
      state.error = action.payload;
      state.loading = false;
    },
  },
});

export const { actions, reducer, name: sliceKey } = userSlice;
