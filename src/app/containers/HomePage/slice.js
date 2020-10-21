import { createSlice } from 'utils/@reduxjs/toolkit';

export const initialState = {
  activeTab: 0,
  contactModalOpen: false,
  communityModalOpen: false,
};

const homePageSlice = createSlice({
  name: 'homePage',
  initialState,
  reducers: {
    setActiveTab(state, action) {
      state.activeTab = action.payload;
    },
    setContactModalOpen(state, action) {
      state.contactModalOpen = action.payload;
    },
    setCommunityModalOpen(state, action) {
      state.communityModalOpen = action.payload;
    },
  },
});

export const { actions, reducer, name: sliceKey } = homePageSlice;
