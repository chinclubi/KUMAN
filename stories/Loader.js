import Loader from '../src/shared/km-uikits/Loader.react'
import React from 'react'
import { storiesOf } from '@kadira/storybook'

storiesOf('Loader', module)
  .add('with small size', () => (
    <Loader size='small' message='asdasds' />
    // <div>asdasd</div>
  ))
