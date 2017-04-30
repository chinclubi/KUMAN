import PropTypes from 'prop-types'
import React from 'react'
import _map from 'lodash/map'
import styles from './OrderList.styl'

const OrderList = (props) => (
  <table className='table is-striped'>
    <tbody>
      {_map(props.carts, (menu, index) => (
        <tr key={index}>
          <th className={styles.km__content}>
            <figure className='image is-128x128'>
              <img src={menu.thumbnail} />
            </figure>
            <span>
              {menu.name}
            </span>
          </th>
          <td className={styles.km__center}>
            {menu.count}
          </td>
          <td className={styles.km__center}>
            ฿{Number(menu.count * menu.price).toFixed(2)}
          </td>
        </tr>
      ))}
    </tbody>
  </table>
)

OrderList.propTypes = {
  carts: PropTypes.object.isRequired
}

export default OrderList
