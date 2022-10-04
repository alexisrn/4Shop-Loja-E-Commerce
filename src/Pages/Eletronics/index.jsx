import { Footer } from "../../Components/Footer";
import { Header } from "../../Components/Header";
import { ItensEletronics } from "../../Components/ItensEletronics";
import { Nav } from "../../Components/Nav";
import * as S from './styles'

export function Eletronics() {
  return (
    <>
      <Header />
      <Nav />
      <ItensEletronics />
      <Footer />
    </>
  );
}
