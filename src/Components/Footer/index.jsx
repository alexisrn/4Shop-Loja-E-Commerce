import * as S from "./styles";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import { GiPadlockOpen } from "react-icons/gi";
import {Link} from 'react-router-dom';


export const Footer = () => {
  return (
    <>
      <S.CtnSuper>
        <S.TopFooter>
          <div>
            <ul>
              <h5>Departamentos</h5>
              <Link to='/jewelery'><p>Joias</p></Link>
              <Link to='/eletronics'><p>Eletronicos</p></Link>
              <Link to='/clothing'><p>Roupas</p></Link>
            </ul>
          </div>
          <div>
            <ul>
              <h5>Loja</h5>
             <Link to='/register'><p>Cadastro</p></Link> 
             <Link to='/login'> <p>Login</p></Link>
            </ul>
          </div>
          <div>
            <ul>
              <h5>Marca</h5>
              <p>Contato</p>
              <p>Quem Somos</p>
              <p>Termos de Uso</p>
              <p>Troca e Devoluções</p>
            </ul>
          </div>
          <div>
            <h5>Site Seguro<GiPadlockOpen/></h5>
            <p>
              Nosso site é construído com tecnologia de ponta e os pagamentos
              são intermediados pelo PagSeguro. Você não precisa se preocupar
              com os seus dados, só aproveitar os nossos produtos.
            </p>
          </div>
        </S.TopFooter>
        <S.BottomFooter>
          <S.Dev> Desenvolvido por Raphael Alexis</S.Dev>
          <S.Links>
           <p><a href="https://github.com/alexisrn" tagert="_blank">
              <FaGithub />
            </a></p> 
            <a
              href="https://www.linkedin.com/in/raphael-alexis-3704531b9/"
              target="_blank"
            >
              <FaLinkedin />
            </a>
          </S.Links>
        </S.BottomFooter>
      </S.CtnSuper>
    </>
  );
};
