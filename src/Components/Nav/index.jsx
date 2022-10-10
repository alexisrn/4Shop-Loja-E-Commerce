import { useState } from "react";
import * as S from "./styles";
import { GiHamburgerMenu } from "react-icons/gi";
import { BsGithub, BsLinkedin } from "react-icons/bs";
import { Link } from "react-router-dom";
import { Sidebard } from "../Sidebar";

export function Nav() {
  const [sideBar, setSideBar] = useState(false);
  const handleToggle = () => setSideBar(!sideBar);
  return (
    <>
      <S.Container>
        <S.Category>
          <GiHamburgerMenu onClick={handleToggle} />
          <span onClick={handleToggle}>Todas as categorias</span>
        </S.Category>
        <S.Icons>
          <p>
          <a href='https://github.com/alexisrn?tab=repositories' target='_blank'><BsGithub /></a>  
          </p>
          <p>
          <a href='https://www.linkedin.com/in/raphael-alexis-3704531b9/' target='_blank'><BsLinkedin /></a>
          </p>
        </S.Icons>

        {sideBar && <Sidebard active={setSideBar} />}
      </S.Container>
    </>
  );
}
