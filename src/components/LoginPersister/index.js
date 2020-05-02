import React from 'react'
import { useEffect } from 'react'
import { useDispatch } from 'react-redux'

import { userLoggedIn } from '../../redux/actions/login'

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
