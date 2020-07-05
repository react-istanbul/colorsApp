import { useEffect } from 'react'
import { useDispatch } from 'react-redux'

import loginSlice from '../Login/loginSlice'

const {
  actions: { userLoggedIn }
} = loginSlice

const LoginPersister = () => {
  const dispatch = useDispatch()

  useEffect(() => {
    const loggedInUserToken = localStorage.getItem('loggedInUserToken')
    const loggedInUserEmail = localStorage.getItem('loggedInUserEmail')

    if (loggedInUserEmail && loggedInUserToken) {
      dispatch(userLoggedIn(loggedInUserEmail))
    }
  }, [dispatch])

  return null
}

export default LoginPersister
