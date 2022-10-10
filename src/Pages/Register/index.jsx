import { Footer } from "../../Components/Footer";
import { Header } from "../../Components/Header";
import * as S from "./styles";
import { Link, useNavigate } from "react-router-dom";
import useAuth from "../../Hooks/useAuth";
import { useState } from 'react';

export function Register() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [passwordConf, setPasswordConf] = useState("");
  const [error, setError] = useState("");
  const navigate = useState();

  const { signup } = useAuth();

  const handleSignup = () => {
    if(!email | !password | !passwordConf){
      setError("Preencha todos os campos");
      return;
    }else if(password != passwordConf){
      setError("As senhas não são iguais");
      return;
    }
    const res = signup(email, password);

    if(res) {
      setError(res);
      return;
    }
    alert("Usuário cadastrado com sucesso ! ");
    navigate("/login");
  }

  return (
    <>
      <Header />
      <S.Container>
        <S.CtnRegister>
          <S.HeadRegister>
            <p>Criar sua conta</p>
            <p>Insira um e-mail e senha válidas para criar uma conta.</p>
          </S.HeadRegister>
          <S.InputLogin>
            <div>
              <p>E-mail</p>
              <input
                type="email"
                placeholder="Ex: raphael@gmail.com"
                value={email}
                onChange={(e)=>[setEmail(e.target.value), setError("")]}
              />
              <p>Senha</p>
              <input 
               type="password"
               placeholder=" *********" 
               value={password}
               onChange={(e)=>[setPassword(e.target.value), setError("")]} />
              <p>Confirmar senha</p>
              <input
               type="password" 
               placeholder=" *********" 
              value={passwordConf}
              onChange={(e)=>[setPasswordConf(e.target.value), setError("")]} />
            </div>
            <S.MsgError>{error}</S.MsgError>
            <S.BottomCtn>
              <button onClick={handleSignup}>Começar</button>
            </S.BottomCtn>
          </S.InputLogin>
        </S.CtnRegister>
        <S.Register>
          <div>
            <Link to="/login">
              <p>Possui uma conta? Faça Login</p>
            </Link>
          </div>
        </S.Register>
      </S.Container>
      <Footer />
    </>
  );
}
