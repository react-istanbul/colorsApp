import React from 'react'

import styles from './ColorCard.module.css'

const ColorCard = ({ hex = '#98B2D1' }) => (
  <div className={styles.colorCard}>
    <div className={styles.preview} style={{ backgroundColor: hex }}>
      <span className={styles.hex}>{hex}</span>
    </div>
    <div className={styles.decription}>
      <div className={styles.name}>cerulean</div>
      <div className={styles.info}>
        <span className={styles.infoTitle}>Pantone value</span>
        <span className={styles.infoValue}>15-4020</span>
      </div>
      <div className={styles.info}>
        <span className={styles.infoTitle}>Year</span>
        <span className={styles.infoValue}>15-4020</span>
      </div>
    </div>
  </div>
)

export default ColorCard
