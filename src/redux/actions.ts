import CartActionTypes from "./cart/action-types";

export const addProductToCart = (payload: { id: number; name: string; brand: string; description: string; price: string; photo: string; createdAt: string; updatedAt: string; }) =>({
    type: CartActionTypes.ADD_PRODUCT,
    payload
})