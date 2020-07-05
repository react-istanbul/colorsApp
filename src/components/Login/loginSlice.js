import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  isUserLoggedIn: false,
  userEmail: null
}

const loginSlice = createSlice({
  name: 'login',
  initialState,
  reducers: {
    userLoggedIn: (state, action) => {
      state.userEmail = action.payload
      state.isUserLoggedIn = true
    }
  }
})

export default loginSlice
