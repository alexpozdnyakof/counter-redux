import { createAsyncThunk, createSlice, PayloadAction } from '@reduxjs/toolkit'
import syncApi from './sync-api'

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
		incrementByAmount: (
			state,
			action: PayloadAction<string | undefined>
		) => {
			if (typeof action.payload == 'string') {
				state.value += Number(action.payload)
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

export const { increment, decrement, incrementByAmount, setValue } =
	counterSlice.actions

export default counterSlice.reducer
