
import { cartActionTypes }  from './cart.types'
import { addToCart,removeFromCart,removeItemFromCart } from './cart.utils'


const INITIAL_STATE = {
    hidden: true,
    cartItems:[]
}

const cartReducer = (state = INITIAL_STATE, action) => {
    switch (action.type) {
        case cartActionTypes.TOGGLE_CART_HIDDEN:
            return {
                ...state,
                hidden:!state.hidden
            }
        case cartActionTypes.ADD_TO_CART:
            return {
                ...state,
                cartItems: addToCart(state.cartItems, action.payload)
            }
        case cartActionTypes.REMOVE_FROM_CART:
            return {
                ...state,
                cartItems: removeFromCart(state.cartItems, action.payload)
            }
        case cartActionTypes.REMOVE_ITEM:
            return {
                ...state,
                cartItems: removeItemFromCart(state.cartItems,action.payload) 
            }
        default:
            return state
    }

}
export default cartReducer;