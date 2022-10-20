import { Footer } from "../../Components/Footer";
import { Header } from "../../Components/Header";
import { BsFillCheckCircleFill } from "react-icons/bs";
import * as S from "./styles";
import { Link, useNavigate } from "react-router-dom";
import useAuth from "../../Hooks/useAuth";
import { useState } from "react";

export function Login() {
  const { signin } = useAuth();
  const navigate = useNavigate();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  const handleLogin = () => {
    if (!email | !password) {
      setError("Preenche os campos");
      return;
    }
    const res = signin(email, password);

    if (res) {
      setError(res);
      return;
    }
    navigate("/user");
  };

  return (
    <>
      <Header />
      <S.Container>
        <S.CtnLogin>
          <S.HeadLogin>
            <p>Acesse sua conta</p>
            <p>Insira seus dados para entrar na área do usúario.</p>
          </S.HeadLogin>
          <S.InputLogin>
            <div>
              <p>E-mail</p>
              <input
                type="email"
                placeholder="Ex: raphael@gmail.com"
                value={email}
                onChange={(e) => [setEmail(e.target.value), setError("")]}
              />
              <p>Senha</p>
              <input
                type="password"
                placeholder=" *********"
                value={password}
                onChange={(e) => [setPassword(e.target.value), setError("")]}
              />
               <S.MsgError><p>{error}</p></S.MsgError>
            </div>
            <S.BottomCtn>
              <button onClick={handleLogin}>Entrar</button>
              <p>Esqueceu sua senha? Solicite uma nova</p>
            </S.BottomCtn>
          </S.InputLogin>
        </S.CtnLogin>
        <S.Register>
          <div>
            <p>Não possui cadastro na loja?</p>
            <Link to="/register">
              <button>
                Criar Conta <BsFillCheckCircleFill />{" "}
              </button>
            </Link>
          </div>
        </S.Register>
      </S.Container>
      <Footer />
    </>
  );
}
