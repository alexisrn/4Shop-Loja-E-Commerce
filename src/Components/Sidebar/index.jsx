import * as S from "./style";
import bighead from "../../Assets/Images/bighead.svg";
import { Link } from "react-router-dom";
import { FaTshirt } from "react-icons/fa";
import { RiComputerFill } from "react-icons/ri";
import { GiJewelCrown } from "react-icons/gi";
import { GrClose } from "react-icons/gr";

export const Sidebard = ({ active }) => {
  const closeSideBar = () => {
    active(false);
  };
  return (
    <>
      <S.Container sideBar={active}>
        <S.BtnClose onClick={closeSideBar}>
          <GrClose />
        </S.BtnClose>
        <S.Profile>
          <img src={bighead} alt="" />
          <div>
            <h2>Username</h2>
            <p>Ver perfil</p>
          </div>
        </S.Profile>
        <S.List>
          <nav>
            <ul>
              <Link to="/jewelery">
                <li>
                  <GiJewelCrown /> Joias
                </li>
              </Link>
              <Link to="/eletronics">
                {" "}
                <li>
                  <RiComputerFill /> Eletronicos
                </li>
              </Link>
              <Link to="/clothing">
                <li>
                  <FaTshirt /> Roupas
                </li>
              </Link>
            </ul>
          </nav>
        </S.List>
      </S.Container>
    </>
  );
};
