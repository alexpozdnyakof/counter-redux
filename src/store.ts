import { Action, configureStore, ThunkAction } from '@reduxjs/toolkit'
import createSagaMiddleware from 'redux-saga'
import counterReducer from './features/counterSlice'
import scheduleSaga from './features/sagas'

const sagaMiddleware = createSagaMiddleware()

const store = configureStore({
	reducer: {
		counter: counterReducer,
	},
	middleware: getDefaultMiddleware =>
		getDefaultMiddleware().concat(sagaMiddleware),
})

sagaMiddleware.run(scheduleSaga)

export default store
export type AppDispatch = typeof store.dispatch
export type RootState = ReturnType<typeof store.getState>
export type AppThunk<ReturnType = void> = ThunkAction<
	ReturnType,
	RootState,
	unknown,
	Action<string>
>
