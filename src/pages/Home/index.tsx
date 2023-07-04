import * as Sc from './styles';
import { Header } from '../../components/Header';
import { Main } from '../../components/Main';
import { useAside } from '../../stores/asideStore';

export function Home() {
  const {aside} = useAside()

  return (
    <Sc.Container>
      <Header />
      <Main/>
    </Sc.Container>
  )
}
