import { createSlice } from 'utils/@reduxjs/toolkit';

export const initialState = {
  prices: null,
  loading: false,
  error: null,
};

const homePageSlice = createSlice({
  name: 'homePage',
  initialState,
  reducers: {
    loadPrices(state, action) {
      state.prices = null;
      state.loading = true;
      state.error = null;
    },
    pricesLoaded(state, action) {
      state.prices = action.payload;
      state.loading = false;
    },
    pricesError(state, action) {
      state.error = action.payload;
      state.loading = false;
    },
  },
});

export const { actions, reducer, name: sliceKey } = homePageSlice;
