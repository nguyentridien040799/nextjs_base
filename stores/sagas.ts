import { all } from 'redux-saga/effects';
import homepageWatcher from './homepage/saga';

export default function* rootSaga() {
    yield all([
        homepageWatcher()
    ]);
}