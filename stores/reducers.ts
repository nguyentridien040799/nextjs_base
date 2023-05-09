
import { combineReducers } from '@reduxjs/toolkit';
import demosReducer from './demos/slice';

const rootReducer = combineReducers({
    demos: demosReducer,
});

export default rootReducer;