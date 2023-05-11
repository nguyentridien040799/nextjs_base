import { put, takeLeading, delay } from 'redux-saga/effects';
import { getHomepage, getHomepageSuccess, getHomepageFail } from './slice';
import { DataResponse } from '@services/request.type';
import { HomepageResponse } from './type';
import apiHomepage from '@apis/homepage';

function* geHomepageWorker() {
    const [response, error]: DataResponse<HomepageResponse> = yield apiHomepage.getHomepage();
    if (response) {
        yield delay(500);
        yield put({ type: getHomepageSuccess.toString(), payload: response.data });
        return;
    }
    yield put({ type: getHomepageFail.toString() });
}

function* homepageWatcher() {
    yield takeLeading(getHomepage.toString(), geHomepageWorker);
}

export default homepageWatcher;
