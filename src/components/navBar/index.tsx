import * as S from "./style";
import { Link } from "react-router-dom";
import BotaoPrimario from "../botaoPrimario";
import { RiUserAddLine } from "react-icons/ri";
import { RiMenu3Fill } from "react-icons/ri";
const NavBar: React.FC = () => {
  return (
    <>
      <S.Container>
        <S.ContainerNav>
          <S.ContainerLogo>
            <Link to="/home">
              <h1>THENORFTH</h1>
            </Link>
          </S.ContainerLogo>

          <S.Links>
            <ul>
              <Link to="/home">
                <li>Home</li>
              </Link>
              <Link to="/marketplace">
                <li>Marketplace</li>
              </Link>
              <Link to="/criarconta">
                <li>Preços</li>
              </Link>
            </ul>
          </S.Links>

          <S.iconsNav>
            <BotaoPrimario title="Criar Conta" icon={<RiUserAddLine />} />
          </S.iconsNav>
          <S.menuMobile>
            <RiMenu3Fill />
          </S.menuMobile>
        </S.ContainerNav>
      </S.Container>
    </>
  );
};
export default NavBar;
