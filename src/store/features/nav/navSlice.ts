import { createSlice } from '@reduxjs/toolkit'
import { ITag } from '@/types'

const initialState = {
  tags: [] as ITag[],
}

export const tagsSlice = createSlice({
  name: 'tags',
  initialState: initialState,
  reducers: {
    setTags: (state, action) => {
      state.tags = action.payload
    },
  },
})

export default tagsSlice.reducer

export const { setTags } = tagsSlice.actions
