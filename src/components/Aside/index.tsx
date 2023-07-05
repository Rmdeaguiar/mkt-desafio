import * as Sc from './styles';
import Close from '../../assets/close.svg'
import { useAside } from '../../stores/asideStore';
import { useEffect } from 'react';
import { useSelector } from 'react-redux';

export function Aside() {
  const { setAside, aside, handleModal } = useAside();

  useEffect(() => {
    setAside(true)
  }, []);

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

  type RootState = {
    cartReducer: {
      products: Product[]
    }
  }

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
              <img src={Close} alt='close'/>
              <Sc.Product>
                <img src={product.photo} alt='photo'/>
                <span>{product.name}</span>
                <Sc.Quantity>
                  <p>Qtd</p>
                  <Sc.SumNumber>
                    <span>-</span>
                    <div></div>
                    <span>0</span>
                    <div></div>
                    <span>+</span>
                  </Sc.SumNumber>
                </Sc.Quantity>
                <h3>R${product.price.slice(0,-3)}</h3>
              </Sc.Product>
            </Sc.Products>
          ))}
        </Sc.AllProducts>
        <Sc.Total>
          <Sc.Price>
            <h3>Total:</h3>
            <h3>RS798</h3>
          </Sc.Price>
          <Sc.Finish>
            <h4>Finalizar Compra</h4>
          </Sc.Finish>
        </Sc.Total>

      </Sc.Container>}
    </>

  )

}

