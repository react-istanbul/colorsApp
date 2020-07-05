const { createAsyncThunk, createSlice } = require('@reduxjs/toolkit')

export const fetchColorList = createAsyncThunk('colorList/fetchColorList', async () => {
  const res = await fetch('https://reqres.in/api/colors')
  const { data } = await res.json()

  return data
})

const initialState = {
  isLoading: null,
  error: null,
  colors: []
}

const colorListSlice = createSlice({
  name: 'colorList',
  initialState,
  extraReducers: {
    [fetchColorList.pending]: (state) => {
      state.error = null
      state.isLoading = true
      state.colors = []
    },
    [fetchColorList.fulfilled]: (state, action) => {
      state.error = null
      state.isLoading = false
      state.colors = action.payload
    },
    [fetchColorList.rejected]: (state, action) => {
      state.isLoading = false
      state.error = action.payload
    }
  }
})

export default colorListSlice
