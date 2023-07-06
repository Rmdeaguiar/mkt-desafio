import CartActionTypes from "./action-types"
import { Product } from '../../types'

const initialState = {
    products: []
}

const cartReducer = (state = initialState, action: any) => {
    switch (action.type) {
        case CartActionTypes.ADD_PRODUCT:

            const productIsAlreadyIn = state.products.some(
                (product: Product) => product.id === action.payload.id);

            if (productIsAlreadyIn) {
                return {
                    ...state, products: state.products.map((product: Product) => (
                        product.id === action.payload.id ? { ...product, quantity: product.quantity! + 1 } :
                            { ...product }
                    ))
                }
            }
            return {
                ...state, products: [...state.products, { ...action.payload, quantity: 1 }]
            };

        case CartActionTypes.REMOVE_PRODUCT:
            return {
                ...state,
                products: state.products.filter((product: Product) => (
                    product.id !== action.payload.id
                ))
            };

        case CartActionTypes.SUM_PRODUCT:
            return {
                ...state, products: state.products.map((product: Product) => (
                    product.id === action.payload.id ?
                        { ...product, quantity: product.quantity! + 1 }
                        : product 
                ))
            }

        case CartActionTypes.SUB_PRODUCT:
            return {
                ...state, products: state.products.map((product: Product) => (
                    product.id === action.payload.id ?
                        { ...product, quantity: product.quantity! - 1 }
                        : product)
                ).filter((product: Product) => product.quantity > 0)
            }
        default:
            return state;
    }

}

export default cartReducer