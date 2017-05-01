import * as actionTypes from './actionTypes'

const initState = {}

export default (state = initState, action) => {
  switch (action.type) {
    case actionTypes.ADD_MENU_TO_CART : {
      const { id } = action.menu
      return {
        ...state,
        [id]: !state[id] ? ({
          ...action.menu,
          count: 1
        }) : ({
          ...state[id],
          count: state[id].count + 1
        })
      }
    }
    case actionTypes.CLEAR_CART:
      return {}
    default:
      return state
  }
}
