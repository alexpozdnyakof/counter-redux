import { createAsyncThunk, createSlice, PayloadAction } from '@reduxjs/toolkit'
import { AppThunk } from '../store'
import { selectCount } from './counterSelector'
import syncApi from './sync-api'

export enum ActionTypes {
	ScheduleSync = 'SCHEDULE_SYNC',
}

interface CounterState {
	value: number
	status: 'idle' | 'loading' | 'failed'
}

const initialState: CounterState = {
	value: 0,
	status: 'idle',
}

export const syncValue = createAsyncThunk('counter/syncValue', async () => {
	const result = await syncApi()
	return result.data
})

export const resetValueIfNotZero = (): AppThunk => (dispatch, getState) => {
	const currentValue = selectCount(getState())
	if (currentValue !== 0) {
		dispatch(setValue('0'))
	}
}

export const sagaAction = () => ({
	type: ActionTypes.ScheduleSync,
})

export const counterSlice = createSlice({
	name: 'counter',
	initialState,
	reducers: {
		increment: state => {
			state.value += 1
		},
		decrement: state => {
			state.value -= 1
		},
		setValue: (state, action: PayloadAction<string | undefined>) => {
			if (typeof action.payload == 'string') {
				state.value = Number(action.payload)
			}
		},
	},
	extraReducers: builder => {
		builder
			.addCase(syncValue.pending, state => {
				state.status = 'loading'
			})
			.addCase(syncValue.fulfilled, (state, action) => {
				state.status = 'idle'
				state.value = action.payload
			})
			.addCase(syncValue.rejected, state => {
				state.status = 'failed'
			})
	},
})

export const { increment, decrement, setValue } = counterSlice.actions

export default counterSlice.reducer
