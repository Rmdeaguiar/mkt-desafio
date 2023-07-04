import * as Sc from './styles';
import Chart from '../../assets/chart.svg'
import { useAside } from '../../stores/asideStore';
import { Aside } from '../Aside';

export function Header() {
  const { aside, handleModal } = useAside();

  return (
    <Sc.Container>
      <h1>Tech Store</h1>
      <Sc.ChartBox >
        <img src={Chart} alt='carrinho' onClick={() => handleModal()} />
        <h2 onClick={() => handleModal()}>0</h2>
      </Sc.ChartBox>
        {aside == true && <Aside />}
    </Sc.Container>
  )
}
