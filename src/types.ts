export type Product = {
    id: number
    name: string
    brand: string
    description: string
    price: string
    photo: string
    createdAt: string
    updatedAt: string
    quantity: number
  }

  export type RootState = {
    cartReducer: {
      products: Product[]
    }
  }