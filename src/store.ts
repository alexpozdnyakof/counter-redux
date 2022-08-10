import { Action, configureStore, ThunkAction } from '@reduxjs/toolkit'
import counterReducer from './features/counterSlice'

const store = configureStore({
	reducer: {
		counter: counterReducer,
	},
})

export default store
export type AppDispatch = typeof store.dispatch
export type RootState = ReturnType<typeof store.getState>
export type AppThunk<ReturnType = void> = ThunkAction<
	ReturnType,
	RootState,
	unknown,
	Action<string>
>
