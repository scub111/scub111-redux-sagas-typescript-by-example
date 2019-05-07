import { call, put, takeEvery, all, fork, takeLatest, throttle, race, take } from 'redux-saga/effects';
import { generateNewNumber, generateHigherNewNumber } from '../services';
import { numberRequestCompletedAction } from '../actions'
import { actionIds } from '../common'

function* watchNewGeneratedNumberRequestStart() {
    yield takeEvery(actionIds.GET_NUMBER_REQUEST_START, requestNewGeneratedNumber);

    // yield takeLatest(actionIds.GET_NUMBER_REQUEST_START, requestNewGeneratedNumber);

    // yield throttle(1000, actionIds.GET_NUMBER_REQUEST_START, requestNewGeneratedNumber);
}

function* requestNewGeneratedNumber() {
    // const generatedNumber = yield call(generateNewNumber);
    // yield put(numberRequestCompletedAction(generatedNumber))

    //--Race case
    // const { generatedNumber, cancel } = yield race({
    //     generatedNumber: call(generateNewNumber),
    //     cancel: take(actionIds.CANCEL_ONGOING_NUMBER_REQUEST)
    // })
    // if (!cancel) {
    //     yield put(numberRequestCompletedAction(generatedNumber))
    // }

    //--All case
    // const { generatedNumber, generatedHigherNumber } = yield all({
    //     generatedNumber: call(generateNewNumber),
    //     generatedHigherNumber: call(generateHigherNewNumber),
    // })
    // yield put(numberRequestCompletedAction(generatedNumber))
    // yield put(numberRequestCompletedAction(generatedHigherNumber))

    //--Notification case
    const result = yield take(actionIds.GET_NUMBER_REQUEST_USER_CONFIRMATION);
    if (result.payload === true) {
        const generatedNumber = yield call(generateNewNumber);
        yield put(numberRequestCompletedAction(generatedNumber))
    }
}

// Register all your watchers
export const rootSaga = function* root() {
    yield all([
        fork(watchNewGeneratedNumberRequestStart),
    ])
}