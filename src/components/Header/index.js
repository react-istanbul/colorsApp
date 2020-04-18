import React from 'react'

import styles from './Header.module.css'
import logo from './logo.png'

const Header = () => (
  <div className={styles.header}>
    <img className={styles.logo} src={logo} alt="ColorsApp logo" />
  </div>
)

export default Header
