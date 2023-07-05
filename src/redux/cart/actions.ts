import CartActionTypes from "./action-types";
import { Product } from '../../types'

export const addProductToCart = (payload: Product) => ({
    type: CartActionTypes.ADD_PRODUCT,
    payload
})

export const removeProductFromCart = (payload: Product) => ({
    type: CartActionTypes.REMOVE_PRODUCT,
    payload
})

export const sumProductOfCart = (payload: Product) => ({
    type: CartActionTypes.SUM_PRODUCT,
    payload
})

export const subProductOfCart = (payload: Product) => ({
    type: CartActionTypes.SUB_PRODUCT,
    payload
})