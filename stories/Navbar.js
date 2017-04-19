import Navbar from '../src/shared/km-uikits/Navbar.react'
import React from 'react'
import { storiesOf } from '@kadira/storybook'

storiesOf('Navbar', module)
  .add('without props', () => (
    <Navbar />
  ))
