import React from 'react'
import styles from './index.less'

class Favorite extends React.Component {
  render () {
    return (
      <div className={styles.fav} onClick={this.props.onClick}>
        {this.props.loggedIn &&
          ((this.props.favorite &&
          <img src='/public/images/heart.active.png' />) ||
          <img src='/public/images/heart.inactive.png' />)
        }
      </div>
    )
  }
}

export default Favorite
