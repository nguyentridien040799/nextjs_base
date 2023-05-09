import { createSlice, PayloadAction } from '@reduxjs/toolkit';

import { DemoState, DemosResponse } from './type';
import { ActionStatus } from '@stores/type';

const initialState: DemoState = {
    status: ActionStatus.Idle,
    DemosResponse: [],
    loadingGetDemos: false,
};

const demosSlice = createSlice({
    name: 'banks',
    initialState,
    reducers: {
        getListDemos: (state: DemoState) => {
            state.status = ActionStatus.Pending;
            state.loadingGetDemos = true;
        },
        getListDemosSuccess: (state: DemoState, action: PayloadAction<DemosResponse>) => {
            state.status = ActionStatus.Succeeded;
            state.loadingGetDemos = false;
            state.DemosResponse = action.payload;
        },
        ggetListDemosFail: (state: DemoState) => {
            state.status = ActionStatus.Failed;
            state.loadingGetDemos = false;
        },
    },
});

export const { getListDemos, getListDemosSuccess, ggetListDemosFail } = demosSlice.actions;

export default demosSlice.reducer;
