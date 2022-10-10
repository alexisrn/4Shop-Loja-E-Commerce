import * as S from "./styles";
import { BsSearch, BsFillHeartFill } from "react-icons/bs";
import { CgProfile } from "react-icons/cg";
import { Link, useNavigate } from "react-router-dom";
import { useState } from "react";

export function Header() {
  const [search, setSearch] = useState("");
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!search) return;

    navigate(`/search?q=${search}`);
    setSearch('');
  };

  return (
    <>
    <S.Container>
      <S.Logo>
        <Link to="/">
          <h1>4SHOP</h1>
        </Link>
      </S.Logo>
      <form onSubmit={handleSubmit}>
        <S.Inputs>
          <S.BtnSearch>
            <BsSearch />
          </S.BtnSearch>
          <input
            type="text"
            value={search}
            onChange={(e) => setSearch(e.target.value)}
          />
        </S.Inputs>
      </form>
      <S.Links>
        <ul>
          <li>
            <Link to="/login">
              <span>
                <CgProfile />
              </span>
            </Link>
          </li>
          <li>
            <span>
              <BsFillHeartFill />
            </span>
          </li>
        </ul>
      </S.Links>
    </S.Container>
    </>
  );
}
