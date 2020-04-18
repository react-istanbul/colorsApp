import React from 'react'

import styles from './LoginButton.module.css'

const LoginButton = ({ children, handleClick, disabled }) => (
  <button className={styles.button} onClick={handleClick} disabled={disabled}>
    {children}
  </button>
)

export default LoginButton
