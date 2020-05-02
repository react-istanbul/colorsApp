import React from 'react'
import { useSelector } from 'react-redux'
import { Link } from 'react-router-dom'

import { selectIsUserLoggedIn, selectLoggedInUserEmail } from '../../redux/accessors'
import styles from './Header.module.css'
import logo from './logo.png'

const Header = () => {
  const isUserLoggedIn = useSelector(selectIsUserLoggedIn)
  const loggedInUserEmail = useSelector(selectLoggedInUserEmail)

  return (
    <div className={styles.header}>
      <Link to="/">
        <img className={styles.logo} src={logo} alt="ColorsApp logo" />
      </Link>
      {isUserLoggedIn ? (
        <span className={styles.loggedInUserEmail}>{loggedInUserEmail}</span>
      ) : (
        <Link to="/login" className={styles.loginLink}>
          Login
        </Link>
      )}
    </div>
  )
}

export default Header
