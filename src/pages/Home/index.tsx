import * as Sc from './styles';
import { Header } from '../../components/Header';
import { Main } from '../../components/Main';

export function Home() {

  return (
    <Sc.Container>
      <Header />
      <Main/>
    </Sc.Container>
  )
}
