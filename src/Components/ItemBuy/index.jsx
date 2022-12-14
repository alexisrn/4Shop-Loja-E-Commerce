import * as S from './styles';
import { HiShoppingCart } from "react-icons/hi";
import { AiOutlineHeart, AiFillWallet } from "react-icons/ai";
import { BsArrowClockwise } from "react-icons/bs";

export const ItensBuy = ({image, title, price, category, description}) => {
    return(<>
        <>
            <S.ContainerTop>
              <S.Images>
                <S.TopImg>
                  <img src={image} alt="" />
                </S.TopImg>
                <S.BottomImgs>
                  <img src={image} alt="" />
                </S.BottomImgs>
              </S.Images>
              <S.Infs>
                <S.TitleText>{title}</S.TitleText>
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
                    <h2>${price}</h2>
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
                <p>Categoria: {category}</p>
                <p>{description}</p>
                </S.TextDesc>
            </S.Description>
          </>
        </>)
}