import * as Sc from './styles';
import Chart from '../../assets/chart.svg'
import { useAside } from '../../stores/asideStore';
import { Aside } from '../Aside';
import { useSelector } from 'react-redux';
import { selectProductsCount } from '../../redux/cart/cart.selectors';


export function Header() {
  const { aside, handleModal } = useAside();
  const productsCount = useSelector(selectProductsCount)

  return (
    <Sc.Container>
      <h1>MKS<span> Sistemas</span></h1>
      <Sc.ChartBox >
        <img src={Chart} onClick={() => handleModal()} />
        <h2 onClick={() => handleModal()}>{productsCount}</h2>
      </Sc.ChartBox>
      {aside === true && <Aside />}
    </Sc.Container>
  )
}
