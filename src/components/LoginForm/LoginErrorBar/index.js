import React from 'react'

import { ReactComponent as ErrorIcon } from './ErrorIcon.svg'
import styles from './LoginErrorBar.module.css'

const LoginErrorBar = () => (
  <div className={styles.loginErrorBar}>
    <ErrorIcon />
    <div className={styles.errorContent}>
      <p className={styles.errorTitle}>Your email or password is wrong</p>
      <p className={styles.errorDescription}>Please check your details and try again.</p>
    </div>
  </div>
)

export default LoginErrorBar
