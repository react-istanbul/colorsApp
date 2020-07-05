import React from 'react'
import { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'

import { selectAreColorsLoading, selectColors } from '../../redux/accessors'
import ColorCard from '../ColorCard'
import Header from '../Header'
import styles from './ColorList.module.css'
import { fetchColorList } from './colorListSlice'

const ColorList = () => {
  const dispatch = useDispatch()

  useEffect(() => {
    dispatch(fetchColorList())
  }, [dispatch])

  const isLoading = useSelector(selectAreColorsLoading)
  const colors = useSelector(selectColors)

  return (
    <div className={styles.home}>
      <Header />
      <div className={styles.cardsHolder}>
        {isLoading ? (
          'Loading...'
        ) : (
          <>
            {colors.map((c) => (
              <ColorCard key={c.id} {...c} />
            ))}
          </>
        )}
      </div>
    </div>
  )
}

export default ColorList
