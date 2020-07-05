import { combineReducers } from 'redux'

import colorListSlice from '../../components/ColorList/colorListSlice'
import loginSlice from '../../components/Login/loginSlice'

export default combineReducers({
  login: loginSlice.reducer,
  colors: colorListSlice.reducer
})
