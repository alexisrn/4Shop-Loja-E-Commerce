import { useState, useEffect } from "react";
import * as S from "./styles";
import { Link } from "react-router-dom";
import { ItemCard } from "../ItemCard";

export function Products() {
  const [item, setItem] = useState([]);
  const getItens = async () => {
    fetch("https://fakestoreapi.com/products?limit=8")
      .then((res) => res.json())
      .then((json) => setItem(json));
  };

  const filterItens = (name) => {
    let filterItens = [];
    for (let i in item) {
      if (item[i].data.name.includes(name)) {
        filterItens.push(item[i]);
      }
    }
    setItem(filterItens);
  };

  useEffect(() => {
    getItens();
  }, []);
  return (
    <>
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
