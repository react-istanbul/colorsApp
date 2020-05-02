import React from 'react'
import { useSelector } from 'react-redux'
import { Redirect } from 'react-router-dom'

import { selectIsUserLoggedIn } from '../../redux/accessors'
import Header from '../Header'
import styles from './Home.module.css'

const Home = () => {
  const isUserLoggedIn = useSelector(selectIsUserLoggedIn)

  return (
    <div className={styles.home}>
      <Header />
      <div className={styles.cardsHolder}>there will be some cards here</div>
    </div>
  )
}

export default Home
