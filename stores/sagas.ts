import { all } from 'redux-saga/effects';
import demosWatcher from './demos/saga';

export default function* rootSaga() {
    yield all([
        demosWatcher()
    ]);
}