
import { combineReducers } from '@reduxjs/toolkit';
import homepageReducer from './homepage/slice';

const rootReducer = combineReducers({
    homepage: homepageReducer
});

export default rootReducer;