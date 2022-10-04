import { Menu, MenuButton, MenuList, MenuItem } from "@chakra-ui/react";
import { useState } from "react";
import * as S from "./styles";
import { GiHamburgerMenu } from "react-icons/gi";
import {Link} from 'react-router-dom';



export function Nav() {
  const [active, setActive] = useState(false);
  const ToggleMod = () => {
    setActive(!active);
  }
  return (
    <>
      <S.Container>
        <S.Hamb>
        <Menu>
          <MenuButton
            as={GiHamburgerMenu}
            rightIcon={<GiHamburgerMenu />}
          ></MenuButton>
          <MenuList>
            <div>
            <MenuItem>
            <Link to ='/eletronics'><p>Eletronics</p></Link>
            </MenuItem>
            <MenuItem>
              <Link to ='/jewelery'><p>jewelery</p></Link>
            </MenuItem>
            <MenuItem>
            <Link to ='/clothing'><p>Clothing</p></Link>
            </MenuItem>
            </div>
          </MenuList>
        </Menu>
        <p>Todas as categorias</p>
        </S.Hamb>
        
      </S.Container>
    </>
  );
}
