import React from 'react'
import styles from './index.less'

class Hero extends React.Component {
  render () {
    return (
      <div>
        <div className={styles.hero}>
          <div className={styles.mainball}>
            <img
              src='public/images/main-ball-final.png'
              alt='main ball'
            />
          </div>
          <div className={styles.title}>
            Hamster Ball Fantasy League
          </div>
          <div className={styles.tagline}>
            The ONLY place on the web to follow the Hamster Ball League
          </div>
        </div>
      </div>
    )
  }
}

export default Hero
