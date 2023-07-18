import * as Sc from './styles';
import Bag from '../../assets/bag.svg'
import instance from '../../services/api';
import { useEffect, useState } from 'react'
import { useDispatch } from 'react-redux'
import { addProductToCart } from '../../redux/cart/actions';
import { Product } from '../../types'
import { useLoading } from '../../stores/loadingStore';
import { Loading } from '../Loading';

export function Main() {

  const [products, setProducts] = useState<Product[]>([{ id: 1, name: '', brand: '', description: '', price: '', photo: '', createdAt: '', updatedAt: '', quantity: 0 }])

  const { loading, setLoading } = useLoading();

  // eslint-disable-next-line react-hooks/exhaustive-deps
  useEffect(() => {
    loadProducts()
  }, []);

  async function loadProducts() {
    try {
      setLoading(true)
      const response = await instance.get('', {
      });
      setProducts(response.data.products)
      setLoading(false)
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
      {loading && <Loading/>}
      <Sc.ProductsList>
        {products.map((product) => (
          <div key={product.id}>
            <Sc.Product>
              <img src={product.photo} alt='product'/>
              <Sc.Description>
                <h3>{product.name}</h3>
                <h4>R${product.price.slice(0, -3)}</h4>
              </Sc.Description>
              <p>{product.description}</p>
              <Sc.AddBag>
                <img src={Bag} alt='sacola' />
                <span onClick={() => handleProductClick(product)}>COMPRAR</span>
              </Sc.AddBag>
            </Sc.Product>
          </div>
        ))}
      </Sc.ProductsList>
    </Sc.Container>
  )
}
