import { Link } from 'react-router-dom'
import PropTypes from 'prop-types'
import React from 'react'
import className from 'classnames'
import styles from './Detail.styl'

class Detail extends React.Component {
  static propTypes = {
    match: PropTypes.shape({
      params: PropTypes.shape({
        restaurantId: PropTypes.string.isRequired
      }).isRequired
    }).isRequired
  }

  constructor (props) {
    super(props)
    this.state = {
      isLater: false,
      phone: '',
      direction: ''
    }
  }

  onTimeChange = ({ currentTarget: { value } }) => {
    this.setState({
      isLater: value === 'later'
    })
  }

  onInputChange = ({ currentTarget: { name, value } }) => {
    this.setState({ [name]: value })
  }

  render () {
    return (
      <section>
        <div className='field is-horizontal'>
          <div className='field-label is-normal'>
            <label className='label'>Full name</label>
          </div>
          <div className='field-body'>
            <div className='field'>
              <div className='control'>
                <input className='input' type='text' value='Donald Trump' disabled />
              </div>
            </div>
          </div>
        </div>
        <div className='field is-horizontal'>
          <div className='field-label is-normal'>
            <label className='label'>Email</label>
          </div>
          <div className='field-body'>
            <div className='field'>
              <div className='control'>
                <input className='input' type='text' value='trump.us@gmail.com' disabled />
              </div>
            </div>
          </div>
        </div>
        <div className='field is-horizontal'>
          <div className='field-label is-normal'>
            <label className='label'>Phone</label>
          </div>
          <div className='field-body'>
            <div className='field'>
              <div className='control'>
                <input
                  name='phone'
                  className='input'
                  type='text'
                  placeholder='e.g. 6682-482-2222'
                  onChange={this.onInputChange}
                />
              </div>
              { this.state.phone === '' && (
                <p className='help is-danger'>
                  This field is required
                </p>
              )}
            </div>
          </div>
        </div>
        <div className='field is-horizontal'>
          <div className='field-label is-normal'>
            <label className='label'>Direction/ Landmark</label>
          </div>
          <div className='field-body'>
            <div className='field'>
              <div className='control'>
                <textarea
                  name='direction'
                  className='textarea'
                  rows='2'
                  placeholder='Explain how we can find you'
                  onChange={this.onInputChange}
                />
              </div>
              { this.state.direction === '' && (
                <p className='help is-danger'>
                  This field is required
                </p>
              )}
            </div>
          </div>
        </div>
        <div className='field'>
          <label className='label'>When would you like it?</label>
          <div className={className('control', styles.km__center)}>
            <label className='radio'>
              <input
                type='radio'
                name='member'
                value='now'
                onChange={this.onTimeChange}
                checked={!this.state.isLater}
              />
              NOW
            </label>
            <label className='radio'>
              <input
                type='radio'
                name='member'
                value='later'
                onChange={this.onTimeChange}
                checked={this.state.isLater}
              />
              LATER
            </label>
            {this.state.isLater && (
              <span className={className('select', 'is-small', styles.km__select)}>
                <select>
                  <option>Select Time</option>
                  <option>9:00 AM</option>
                  <option>9:15 AM</option>
                  <option>9:30 AM</option>
                  <option>9:45 AM</option>
                  <option>10:00 AM</option>
                  <option>10:15 AM</option>
                  <option>10:30 AM</option>
                  <option>10:45 AM</option>
                  <option>11:00 AM</option>
                  <option>11:15 AM</option>
                  <option>11:30 AM</option>
                  <option>11:45 AM</option>
                  <option>12:00 PM</option>
                  <option>12:15 PM</option>
                  <option>12:30 PM</option>
                  <option>12:45 PM</option>
                  <option>13:00 PM</option>
                  <option>13:15 PM</option>
                  <option>13:30 PM</option>
                  <option>13:45 PM</option>
                  <option>14:00 PM</option>
                  <option>14:15 PM</option>
                  <option>14:30 PM</option>
                  <option>14:45 PM</option>
                  <option>15:00 PM</option>
                  <option>15:15 PM</option>
                  <option>15:30 PM</option>
                  <option>15:45 PM</option>
                  <option>16:00 PM</option>
                  <option>16:15 PM</option>
                  <option>16:30 PM</option>
                  <option>16:45 PM</option>
                  <option>17:00 PM</option>
                </select>
              </span>
            )}
          </div>
        </div>
        <div className='field is-grouped'>
          <p className='control'>
            <Link to={`success`} className='button is-primary' disabled={
              (this.state.direction === '') || (this.state.phone === '')
            }>
              <span className='icon is-small'>
                <i className='fa fa-cart-arrow-down' />
              </span>
              <span>
                Place Your Order
              </span>
            </Link>
          </p>
          <p className='control'>
            <button className='button is-link'>Cancel</button>
          </p>
        </div>
      </section>
    )
  }
}

export default Detail
