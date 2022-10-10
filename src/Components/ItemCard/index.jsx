import * as S from "./styles";
import { Link } from 'react-router-dom';

export function ItemCard({id, image, category, title, price}) {
  return (
    <>
      <S.Card key={id}>
        <S.Container>
        <Link to={`/${id}`}>
          <S.CtnImg>
            <S.Img>
              <img src={image} alt="" />
            </S.Img>
          </S.CtnImg>
          <S.CtnDescription>
            <S.Category>{category}</S.Category>
            <S.Title>{title}</S.Title>
            <S.Price>${price}</S.Price>
          </S.CtnDescription>
        </Link>
        </S.Container>
      </S.Card>
    </>
  );
}
