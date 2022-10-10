import * as S from "./styles";
import { BsSearch, BsFillHeartFill } from "react-icons/bs";
import { CgProfile } from "react-icons/cg";
import { Link, useNavigate } from "react-router-dom";
import { useState } from "react";

export function Header() {
  const [search, setSearch] = useState("");
  const navigate = useNavigate();



  return (
    <S.Container>
      <div>
        <Link to="/">
          <h1>4SHOP</h1>
        </Link>
      </div>
      <form >
        <S.Inputs >
          <S.BtnSearch>
            <BsSearch />
          </S.BtnSearch>
          <input
            type="text"
            value={search}
            onChange={(e) => setSearch(e.target.value)}
          ></input>
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
  );
}
