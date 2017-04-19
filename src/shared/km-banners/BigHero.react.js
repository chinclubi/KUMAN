import React from 'react'
import className from 'classnames'
import styles from './BigHero.styl'

const Hero = () => (
  <section className={className(
    styles.hero, 'hero', 'is-medium', 'is-primary', 'is-bold'
  )}>
    <div className='hero-body'>
      <div className='container'>
        <h1 className={className(
          styles.hero__title,
          'title'
        )}>
          FREE SHIPPING CHARGE!
        </h1>
        <h2 className='subtitle'>
          UNTIL 30 APRIL
        </h2>
      </div>
    </div>
  </section>
)

export default Hero
