import { createSlice } from '@reduxjs/toolkit'

export interface CounterSlice {
  value: number
  title: string
}

const initialState: CounterSlice = {
  value: 0,
  title: 'Hi!Redux',
}

export const counterSlice = createSlice({
  name: 'counter',
  initialState,
  reducers: {
    increment: (state) => {
      state.value++
    },
    decrement: (state) => {
      state.value--
    },
  },
})
export const { increment, decrement } = counterSlice.actions
export default counterSlice.reducer
