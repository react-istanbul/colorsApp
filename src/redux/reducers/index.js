import { combineReducers } from 'redux'

import loginSlice from '../../components/Login/loginSlice'
import colors from './colors'

export default combineReducers({ login: loginSlice.reducer, colors })
