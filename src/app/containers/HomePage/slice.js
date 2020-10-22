import { createSlice } from 'utils/@reduxjs/toolkit';

export const initialState = {
  activeTab: 0,
  adviceDismissed: [],
  adviceLiked: [],
  contactModalOpen: false,
  communityModalOpen: false,
  communityModalMed: '',
  communityModalMood: 'neutral',
  medCardExpanded: [],
  educationModalOpen: false,
};

const homePageSlice = createSlice({
  name: 'homePage',
  initialState,
  reducers: {
    setActiveTab(state, action) {
      state.activeTab = action.payload;
    },
    dismissAdvice(state, action) {
      state.adviceDismissed = state.adviceDismissed.concat([action.payload]);
    },
    likeAdvice(state, action) {
      state.adviceLiked = state.adviceLiked.concat([action.payload]);
    },
    setContactModalOpen(state, action) {
      state.contactModalOpen = action.payload;
    },
    setCommunityModalOpen(state, action) {
      state.communityModalOpen = action.payload.open;
      state.communityModalMed =
        action.payload.med || initialState.communityModalMed;
      state.communityModalMood =
        action.payload.mood || initialState.communityModalMood;
    },
    setMedCardExpanded(state, action) {
      state.medCardExpanded = action.payload;
    },
    setEducationModalOpen(state, action) {
      state.educationModalOpen = action.payload;
    },
  },
});

export const { actions, reducer, name: sliceKey } = homePageSlice;
