import * as Sc from './styles';
import Bag from '../../assets/bag.svg'
import instance from '../../services/api';
import { useEffect, useState } from 'react'


export function Main() {

  type Product = {
    id: number
    name: string
    brand: string
    description: string
    price: string
    photo: string
    createdAt: string
    updatedAt: string
  }

  const [products, setProducts] = useState<Product[]>([{ id: 1, name: '', brand: '', description: '', price: '', photo: '', createdAt: '', updatedAt: '' }])

  useEffect(() => {
    loadProducts()
    return;
  }, []);

  async function loadProducts() {
    try {
      const response = await instance.get('', {
      });
      setProducts(response.data.products)
      console.log(response)
    } catch (error) {
      console.log(error)
    }
  }

  return (
    <Sc.Container>
      <Sc.ProductsList>
        {products.map((product) => (
          <div key={product.id}>
            <Sc.Produt>
              <img src={product.photo} alt='photo' />
              <Sc.Description>
                <h3>{product.name}</h3>
                <h4>R${product.price.slice(0,-3)}</h4>
              </Sc.Description>
              <p>{product.description}</p>
              <Sc.AddBag>
                <img src={Bag} alt='bag' />
                <span>COMPRAR</span>
              </Sc.AddBag>
            </Sc.Produt>
          </div>
        ))}
      </Sc.ProductsList>
    </Sc.Container>
  )
}
