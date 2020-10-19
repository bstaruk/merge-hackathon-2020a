import { createSlice } from 'utils/@reduxjs/toolkit';

export const initialState = {
  thing: null,
  loading: false,
  error: null,
};

const homePageSlice = createSlice({
  name: 'homePage',
  initialState,
  reducers: {
    loadThing(state, action) {
      state.thing = null;
      state.loading = true;
      state.error = null;
    },
    loadThingSuccess(state, action) {
      state.thing = action.payload;
      state.loading = false;
    },
    loadThingError(state, action) {
      state.error = action.payload;
      state.loading = false;
    },
  },
});

export const { actions, reducer, name: sliceKey } = homePageSlice;
