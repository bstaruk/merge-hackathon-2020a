import { createSlice } from 'utils/@reduxjs/toolkit';

export const initialState = {
  contactModalOpen: false,
};

const homePageSlice = createSlice({
  name: 'homePage',
  initialState,
  reducers: {
    setContactModalOpen(state, action) {
      state.contactModalOpen = action.payload;
    },
  },
});

export const { actions, reducer, name: sliceKey } = homePageSlice;
