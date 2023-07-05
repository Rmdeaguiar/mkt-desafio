import * as Sc from './styles';
import Bag from '../../assets/bag.svg'
import instance from '../../services/api';
import { useEffect, useState } from 'react'
import { useDispatch } from 'react-redux'
import { addProductToCart } from '../../redux/cart/actions';
import { Product } from '../../types'


export function Main() {

  const [products, setProducts] = useState<Product[]>([{ id: 1, name: '', brand: '', description: '', price: '', photo: '', createdAt: '', updatedAt: '', quantity: 0 }])

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

  const dispatch = useDispatch()
  const handleProductClick = (product: Product) => {
    dispatch(addProductToCart(product))

  }

  return (
    <Sc.Container>
      <Sc.ProductsList>
        {products.map((product) => (
          <div key={product.id}>
            <Sc.Product>
              <img src={product.photo} alt='photo' />
              <Sc.Description>
                <h3>{product.name}</h3>
                <h4>R${product.price.slice(0, -3)}</h4>
              </Sc.Description>
              <p>{product.description}</p>
              <Sc.AddBag>
                <img src={Bag} alt='bag' />
                <span onClick={()=>handleProductClick(product)}>COMPRAR</span>
              </Sc.AddBag>
            </Sc.Product>
          </div>
        ))}
      </Sc.ProductsList>
    </Sc.Container>
  )
  }
