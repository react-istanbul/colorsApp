import React from 'react'

import styles from './LoginForm.module.css'

const LoginForm = ({ children, handleSubmit }) => (
  <div>
    <form onSubmit={handleSubmit} className={styles.loginForm}>
      <div>
        <h2 className={styles.loginTitle}>Welcome back!</h2>
        <p className={styles.loginDescription}>Login to your account</p>
      </div>
      {children}
    </form>
  </div>
)

export default LoginForm
