import PropTypes from 'prop-types'
import React from 'react'
import classNames from 'classnames'
import styles from './Loader.styl'

const Loader = (props) => (
  <div className={classNames(styles.loader, styles[`--${props.size}`])}>
    <div className={styles.loader} />
    {props.message && <div className={styles.loader__message}>{props.message}</div>}
  </div>
)

Loader.propTypes = {
  size: PropTypes.oneOf([ 'small', 'big' ]),
  message: PropTypes.string
}

Loader.defaultProps = {
  size: false
}

export default Loader
