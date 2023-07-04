import * as Sc from './styles';
import Close from '../../assets/close.svg'
import { useAside } from '../../stores/asideStore';
import { useEffect } from 'react';

export function Aside() {
  const { setAside, aside, handleModal } = useAside();

  useEffect(() => {
    setAside(true)
  }, []);

  return (
    <> {aside &&
      <Sc.Container>
        <Sc.TitleContent>
          <h1>Carrinho <br></br>de compras</h1>
          <img src={Close} alt='close' onClick={() => handleModal()} />
        </Sc.TitleContent>
        <Sc.AllProducts>
          <Sc.Products>
            <img src={Close} />
            <Sc.Product>
              <img></img>
              <span>Apple Watch Series 4 GPS</span>
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
              <h3>R$399</h3>
            </Sc.Product>
          </Sc.Products>
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

