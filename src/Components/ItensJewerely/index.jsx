import { useState, useEffect } from "react";
import * as S from "./styles";
import { Link } from "react-router-dom";
import { ItemCard } from "../ItemCard";

export function ItensJewelery() {
  const [item, setItem] = useState([]);
  const getItens = async () => {
    fetch("https://fakestoreapi.com/products/category/jewelery")
      .then((res) => res.json())
      .then((json) => setItem(json));
  };

  useEffect(() => {
    getItens();
  }, []);
  return (
    <>
      <S.Text>
        <h2>Jóias</h2>
      </S.Text>

      <S.Container>
        {item
          ? item.map((product) => {
              return (
                <>
                  <ItemCard
                    key={product.id}
                    id={product.id}
                    image={product.image}
                    title={product.title}
                    price={product.price}
                    category={product.category}
                  />
                </>
              );
            })
          : null}
      </S.Container>
    </>
  );
}
