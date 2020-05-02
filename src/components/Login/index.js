import React from 'react'
import { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Redirect } from 'react-router-dom'

import { userLoggedIn } from '../../redux/actions/login'
import { postData } from '../../utils/helpers'
import Header from '../Header'
import Input from '../Input'
import LoginButton from '../LoginButton'
import LoginForm from '../LoginForm'
import LoginErrorBar from '../LoginForm/LoginErrorBar'
import styles from './Login.module.css'

const Login = () => {
  const dispatch = useDispatch()

  const [isLoading, setLoading] = useState(false)
  const [isErred, setErred] = useState(false)

  const isUserLoggedIn = useSelector((s) => s.login.isUserLoggedIn)

  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')

  async function handleSubmitLogin(e) {
    e.preventDefault()

    setErred(false)
    setLoading(true)

    const data = await postData('https://reqres.in/api/login', {
      email,
      password
    })

    setLoading(false)

    if (data.error) {
      setErred(true)
    }

    if (data.token) {
      dispatch(userLoggedIn(email))
    }
  }

  if (isUserLoggedIn) {
    return <Redirect to="/" />
  }

  return (
    <div className={styles.loginWrapper}>
      <Header />
      {isErred && <LoginErrorBar />}
      <LoginForm handleSubmit={handleSubmitLogin}>
        <Input
          label="Email"
          type="email"
          value={email}
          handleChange={(e) => setEmail(e.target.value)}
        />
        <Input
          label="Password"
          type="password"
          value={password}
          handleChange={(e) => setPassword(e.target.value)}
        />
        <div className={styles.tip}>
          Tip: Use <span className={styles.textToSelect}>eve.holt@reqres.in</span> /{' '}
          <span className={styles.textToSelect}>cityslicka</span> to log in.
        </div>
        <LoginButton disabled={isLoading || email === '' || password === ''}>
          Login
        </LoginButton>
      </LoginForm>
    </div>
  )
}

export default Login
