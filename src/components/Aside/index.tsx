import * as Sc from './styles';
import Close from '../../assets/close.svg'
import { useAside } from '../../stores/asideStore';
import { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { Product, RootState } from '../../types'
import { removeProductFromCart, subProductOfCart, sumProductOfCart } from '../../redux/cart/actions';
import { selectCartTotalPrice } from '../../redux/cart/cart.selectors';

export function Aside() {
  const { setAside, aside, handleModal } = useAside();
  const dispatch = useDispatch()

  const chartTotalPrice = useSelector(selectCartTotalPrice)

  const handleRemoveItem = (product: Product) =>{
    dispatch(removeProductFromCart(product))
  }

  const handleAddItem = (product: Product) => {
    dispatch(sumProductOfCart(product))
  }

  const handleSubItem = (product: Product) => {
    dispatch(subProductOfCart(product))
  }

  useEffect(() => {
    setAside(true)
  }, []);

  const { products } = useSelector((rootReducer: RootState) => rootReducer.cartReducer);

  return (
    <> {aside &&
      <Sc.Container>
        <Sc.TitleContent>
          <h1>Carrinho <br></br>de compras</h1>
          <img src={Close} alt='close' onClick={() => handleModal()} />
        </Sc.TitleContent>
        <Sc.AllProducts>
          {products.map(product => (
            <Sc.Products key={product.id}>
              <img src={Close} alt='close' onClick={()=>handleRemoveItem(product)} />
              <Sc.Product>
                <img src={product.photo} alt='photo' />
                <span>{product.name}</span>
                <Sc.Quantity>
                  <p>Qtd</p>
                  <Sc.SumNumber>
                    <span onClick={()=>handleSubItem(product)}>-</span>
                    <div></div>
                    <span>{product.quantity ? product.quantity : 1}</span>
                    <div></div>
                    <span onClick={()=>handleAddItem(product)}>+</span>
                  </Sc.SumNumber>
                </Sc.Quantity>
                <h3>R$ {product.price.slice(0, -3)}</h3>
              </Sc.Product>
            </Sc.Products>
          ))}
        </Sc.AllProducts>
        <Sc.Total>
          <Sc.Price>
            <h3>Total:</h3>
            <h3>RS {chartTotalPrice}</h3>
          </Sc.Price>
          <Sc.Finish>
            <h4>Finalizar Compra</h4>
          </Sc.Finish>
        </Sc.Total>
      </Sc.Container>}
    </>

  )

}

