import * as S from "./styles";
import { Header } from '../../Components/Header';
import { Nav } from '../../Components/Nav';
import { Footer } from '../../Components/Footer';

export function User() {
  return (<>
  <Header/>
  <Nav />
  <S.Container>
    <S.Painel>
        <h1>Painel do usúario</h1>
    </S.Painel>
  </S.Container>
  <Footer/>
  </>);
}
