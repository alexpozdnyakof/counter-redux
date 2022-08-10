import { RootState } from '../store'

export const selectCount = (state: RootState) => state.counter.value
export const selectStatus = (state: RootState) => state.counter.status
