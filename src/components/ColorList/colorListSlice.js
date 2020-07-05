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
      return {
        ...state,
        error: null,
        isLoading: true,
        colors: []
      }
    },
    [fetchColorList.fulfilled]: (state, action) => {
      return {
        ...state,
        error: null,
        isLoading: false,
        colors: action.payload
      }
    },
    [fetchColorList.rejected]: (state, action) => {
      return {
        ...state,
        isLoading: false,
        error: action.payload
      }
    }
  }
})

export default colorListSlice
