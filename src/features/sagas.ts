import { put, takeEvery } from 'redux-saga/effects'
import { ActionTypes, increment } from './counterSlice'

export function* scheduleTask() {
	yield put(increment())
}

export default function* scheduleSaga() {
	yield takeEvery(ActionTypes.ScheduleSync, scheduleTask)
}
