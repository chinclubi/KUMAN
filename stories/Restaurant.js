import React from 'react'
import Restaurant from '../src/shared/km-restaurants/Restaurant.react'
import { storiesOf } from '@kadira/storybook'

storiesOf('Restaurant', module)
  .add('with full props', () => {
    const restaurant = {
      name: 'JJ restaurant',
      image: 'https://source.unsplash.com/collection/622228/1280x960',
      place: 'KU'
    }
    return <Restaurant restaurant={restaurant} />
  })
