import { useState, useEffect } from "react";
import * as S from './styles';
import { Link } from "react-router-dom";


export function ItemClothing() {
    const [item, setItem] = useState([]);
    const getItens = async () => {
      fetch("https://fakestoreapi.com/products/category/men's clothing")
        .then((res) => res.json())
        .then((json) => setItem(json));
  
    };
   
    
    useEffect(() => {
      getItens();
    }, []);
    return (
      <>
        <S.Text>
          <h2>Roupas para Homens</h2>
        </S.Text>
  
        <S.Container>
          {item
            ? item.map((product) => {
                return (
                  <S.Card key={product.id}>
                    <Link to={`/${product.id}`}>
                    <S.CtnImg>
                      <S.Img>
                        <img src={product.image} alt="" />
                      </S.Img>
                    </S.CtnImg>
                    <S.CtnDescription>
                      <S.Description>{product.category}</S.Description>
                      <S.Title>{product.title}</S.Title>
                      <S.Price>${product.price}</S.Price>
                    </S.CtnDescription>
                    </Link>
                  </S.Card>
                );
              })
            : null}
        </S.Container>
      </>
    );
  }
  
  