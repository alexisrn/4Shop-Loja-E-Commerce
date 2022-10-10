import {  useState } from "react";
import * as S from "./styles";
import { GiHamburgerMenu } from "react-icons/gi";
import { Link } from "react-router-dom";
import { Sidebard } from "../Sidebar";

export function Nav() {
  const [sideBar, setSideBar] = useState(false);
  const handleToggle = () => setSideBar(!sideBar); 
  return (
    <>
    <S.Container>
      <GiHamburgerMenu onClick={handleToggle} /><span onClick={handleToggle}>Todas as categorias</span>
      {sideBar && <Sidebard active={setSideBar} />}
      </S.Container>
    </>
  );
}
