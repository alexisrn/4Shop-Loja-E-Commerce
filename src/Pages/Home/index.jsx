
import * as S from './styles';
import { Header } from '../../Components/Header';
import { Pictures } from "../../Components/Pictures";
import { Products } from "../../Components/Products";
import { Nav } from "../../Components/Nav";
import { Footer } from "../../Components/Footer";

export function Home() {
 
  return (
    <>
    <Header/>
    <Nav/>
    <Pictures/>
    <Products/>
    <Footer/>
    
    </>
  );
}


