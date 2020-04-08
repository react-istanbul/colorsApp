import React from 'react'
import styles from './Home.module.css' 
import { useSelector } from 'react-redux'
import { Redirect } from 'react-router-dom'

const Home = () => {

  const isUserLoggedIn = useSelector(s => s.login.isUserLoggedIn)

  if(!isUserLoggedIn) {
    return <Redirect to='/login' />
  }

  return (
    <div className={styles.home}>This is home</div>
  )
}


export default Home