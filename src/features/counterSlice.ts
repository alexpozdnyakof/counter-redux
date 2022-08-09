import { createSlice, PayloadAction } from '@reduxjs/toolkit'

interface CounterState {
	value: number
	status: 'idle' | 'loading' | 'failed'
}

const initialState: CounterState = {
	value: 0,
	status: 'idle',
}

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
})

export const { increment, decrement, incrementByAmount, setValue } =
	counterSlice.actions

export default counterSlice.reducer
