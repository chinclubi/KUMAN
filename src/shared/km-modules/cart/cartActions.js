import * as actionTypes from './actionTypes'

export const Add = menu => ({
  type: actionTypes.ADD_MENU_TO_CART,
  menu
})

export const Clear = () => ({
  type: actionTypes.CLEAR_CART
})
