import { put, takeLeading, delay } from 'redux-saga/effects';
import { getListDemos, getListDemosSuccess, ggetListDemosFail } from './slice';

function* getDemosWorker() {
    // const [response, error]: DataResponse<DemosResponse> = yield apiBanks.getListBanks();
    // if (response && response.success === true) {
        yield delay(500);
        yield put({ type: getListDemosSuccess.toString(), payload: [{id: 1, name: "Test"}] });
        return;
    // }
    yield put({ type: ggetListDemosFail.toString() });
}

function* demosWatcher() {
    yield takeLeading(getListDemos.toString(), getDemosWorker);
}

export default demosWatcher;
