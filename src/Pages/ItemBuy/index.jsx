import * as S from "./styles";
import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { Header } from "../../Components/Header";
import { Nav } from "../../Components/Nav";
import { Footer } from "../../Components/Footer";
import { HiShoppingCart } from "react-icons/hi";
import { AiOutlineHeart, AiFillWallet } from "react-icons/ai";
import { BsArrowClockwise } from "react-icons/bs";

const urlStore = `https://fakestoreapi.com/products/`;

export function ItemBuy() {
  const { id } = useParams();
  const [item, setItem] = useState(null);

  const getItem = async (url) => {
    const res = await fetch(url);
    const data = await res.json();

    setItem(data);
  };

  fetch("https://fakestoreapi.com/products/1")
    .then((res) => res.json())
    .then((json) => setItem(json));

  useEffect(() => {
    const itemUrl = `${urlStore}/${id}`;
    getItem(itemUrl);
  }, []);

  return (
    <>
      <Header />
      <Nav />

      <S.Container>
        {item && (
          <>
            <S.ContainerTop>
              <S.Images>
                <S.TopImg>
                  <img src={item.image} alt="" />
                </S.TopImg>
                <S.BottomImgs>
                  <img src={item.image} alt="" />
                </S.BottomImgs>
              </S.Images>
              <S.Infs>
                <S.TitleText>{item.title}</S.TitleText>
                <S.InfsItem>
                  <section>
                    <p>Cores</p>
                    <S.ButtonsInfs>
                      <button></button> Preto
                    </S.ButtonsInfs>
                    <p>Tamanho</p>
                    <S.ButtonsInfs>Único</S.ButtonsInfs>
                  </section>
                </S.InfsItem>
                <S.Buy>
                  <S.Price>
                    <h2>${item.price}</h2>
                    <S.ButtonsBuy>
                      <button>
                        Comprar <HiShoppingCart />
                      </button>
                      <button>
                        <AiOutlineHeart />
                      </button>
                    </S.ButtonsBuy>
                  </S.Price>
                  <S.InfsPag>
                    <S.Wallet>
                      <AiFillWallet />
                    </S.Wallet>
                    <S.TextWallet>
                      Cartão de crédito ou pix
                      <p>
                        Você pode pagar como quiser, cartão de crédito ou pix
                      </p>
                    </S.TextWallet>
                  </S.InfsPag>
                </S.Buy>
                <h3>Calcule custo e prazo de entrega</h3>
                <S.Cep>
                  <span>CEP</span> <input type="number" />{" "}
                  <S.ButtonRefresh>
                    <BsArrowClockwise />
                  </S.ButtonRefresh>
                </S.Cep>
              </S.Infs>
            </S.ContainerTop>
            <S.Description>
                <S.TextDesc>
                <h3>Descrição</h3>
                <p>Categoria: {item.category}</p>
                <p>{item.description}</p>
                </S.TextDesc>
            </S.Description>
          </>
        )}
      </S.Container>
      <Footer />
    </>
  );
}
