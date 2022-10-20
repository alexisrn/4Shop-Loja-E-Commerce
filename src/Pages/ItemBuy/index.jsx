import * as S from "./styles";
import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { Header } from "../../Components/Header";
import { Nav } from "../../Components/Nav";
import { Footer } from "../../Components/Footer";
import { ItensBuy } from "../../Components/ItemBuy";

const urlStore = `https://fakestoreapi.com/products/`;

export function ItemBuy() {
  const { id } = useParams();
  const [item, setItem] = useState(null);

  const getItem = async (url) => {
    const res = await fetch(url);
    const data = await res.json();

    setItem(data);
  };


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
          <ItensBuy key={item.id}
            id={item.id}
            title={item.title}
            image={item.image}
            price={item.price}
            category={item.category}
            description={item.description}
          />
        )}
      </S.Container>
      <Footer />
    </>
  );
}
