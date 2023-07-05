import { RootState } from "../../types";

export const selectProductsCount = (rootReducer: RootState) => {
    return rootReducer.cartReducer.products.reduce((acc, curr)=> acc + curr.quantity,0)
}

export const selectCartTotalPrice = (rootReducer: RootState) => {
    return rootReducer.cartReducer.products.reduce((acc,curr)=> acc + Number(curr.price)*curr.quantity,0)
}