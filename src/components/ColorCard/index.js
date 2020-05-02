import PropTypes from 'prop-types'
import React from 'react'

import styles from './ColorCard.module.css'

const ColorCard = ({ name, year, pantone_value, color }) => (
  <div className={styles.colorCard}>
    <div className={styles.preview} style={{ backgroundColor: color }}>
      <span className={styles.hex}>{color}</span>
    </div>
    <div className={styles.decription}>
      <div className={styles.name}>{name}</div>
      <div className={styles.info}>
        <span className={styles.infoTitle}>Pantone value</span>
        <span className={styles.infoValue}>{pantone_value}</span>
      </div>
      <div className={styles.info}>
        <span className={styles.infoTitle}>Year</span>
        <span className={styles.infoValue}>{year}</span>
      </div>
    </div>
  </div>
)

ColorCard.propTypes = {
  name: PropTypes.string.isRequired,
  year: PropTypes.number,
  pantone_value: PropTypes.string,
  color: PropTypes.string.isRequired
}

export default ColorCard
