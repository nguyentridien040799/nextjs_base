import { createSlice, PayloadAction } from '@reduxjs/toolkit';

import { HomepageState, HomepageResponse } from './type';
import { ActionStatus } from '@stores/type';

const initialState: HomepageState = {
    status: ActionStatus.Idle,
    HomepageResponse: [],
    loadingHomepage: false,
};

const homepageSlice = createSlice({
    name: 'homepage',
    initialState,
    reducers: {
        getHomepage: (state: HomepageState) => {
            state.status = ActionStatus.Pending;
            state.loadingHomepage = true;
        },
        getHomepageSuccess: (state: HomepageState, action: PayloadAction<HomepageResponse>) => {
            state.status = ActionStatus.Succeeded;
            state.loadingHomepage = false;
            state.HomepageResponse = action.payload;
        },
        getHomepageFail: (state: HomepageState) => {
            state.status = ActionStatus.Failed;
            state.loadingHomepage = false;
        },
    },
});

export const { getHomepage, getHomepageSuccess, getHomepageFail } = homepageSlice.actions;

export default homepageSlice.reducer;
