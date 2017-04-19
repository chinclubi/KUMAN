import PropTypes from 'prop-types'
import React from 'react'
import className from 'classnames'
import styles from './BigHero.styl'

const Hero = ({ background, title, subtitle }) => (
  <section className={className(
    styles.hero, 'hero', 'is-medium', 'is-primary', 'is-bold'
  )} style={{ backgroundImage: `url(${background})` }}>
    <div className='hero-body'>
      <div className='container'>
        <h1 className={className(
          styles.hero__title,
          'title'
        )}>
          {title}
        </h1>
        <h2 className='subtitle'>{subtitle}</h2>
      </div>
    </div>
  </section>
)

Hero.propTypes = {
  background: PropTypes.string,
  title: PropTypes.string,
  subtitle: PropTypes.string
}

Hero.defaultProps = {
  background: 'http://source.unsplash.com/collection/768107/1600x900',
  title: 'FREE SHIPPING CHARGE!',
  subtitle: 'UNTIL 30 APRIL'
}

export default Hero
