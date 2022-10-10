import { useState, useEffect } from "react";
import { useSearchParams, Link } from "react-router-dom";
import { ItemCard } from "../ItemCard";
import { Header } from "../Header";
import * as S from "./styles";
import { Footer } from "../Footer";

const searchUrl = "https://fakestoreapi.com/products";

export function Search() {
  const [searchParams] = useSearchParams();
  const [item, setItem] = useState([]);
  const query = searchParams.get("q");

  const getSearchedItens = async (url) => {
    const res = await fetch(url);
    const data = await res.json();

    setItem(data.results);
  };
  useEffect(() => {
    const searchItem = `${searchUrl}&query=${query}`;

    getSearchedItens(searchItem);
  }, []);
  return (
    <>
      <Header />
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
      <Footer />
    </>
  );
}
