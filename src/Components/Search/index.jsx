import { useState, useEffect } from "react";
import { useSearchParams, Link } from "react-router-dom";
import * as S from './styles'

export function Search() {
    const [searchParams] = useSearchParams()
    const [item, setItem] = useState([]);
    const query = searchParams.get('q');

    const url = "https://fakestoreapi.com/products"
    const getItens = async () => {
      fetch(url)
        .then((res) => res.json())
        .then((json) => setItem(json));
    };

    const filterItens = (name) => {
      let filterItens = [];
      for(let i in item){
        if(item[i].data.name.includes(name)){
          filterItens.push(item[i]);
        }
      }
      setItem(filterItens);
    }
  
    useEffect(() => {
      getItens();
    }, []);
  return (<>
  
 <S.Container>
        {item
          ? item.map((product) => {
              return (
                <>
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
                </>
              );
            })
          : null}
      </S.Container> 
  </>);
}
