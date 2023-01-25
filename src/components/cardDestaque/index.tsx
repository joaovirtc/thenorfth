import * as S from "./styles";
import BotaoPrimario from "../botaoPrimario";
import { RiShoppingCart2Line } from "react-icons/ri";
import { RiArrowDropRightLine } from "react-icons/ri";
import BotaoSecundario from "../../components/botaoSecundario";

type cardDestaqueProps = {
  name: string;
  autor: string;
  description: string;
  priceCoin: any;
  priceMoney: any;
  image: any;
};

const cardDestaque = ({
  name = "",
  autor = "",
  description = "",
  priceCoin = "",
  priceMoney = 5,
  image = {},
}: cardDestaqueProps) => {
  return (
    <>
      <S.Container>
        <h1>EM DESTAQUE</h1>
        <S.Content>
          <S.descriptionContainer>
            <h1>{name}</h1>
            <h3>{autor}</h3>
            <p>{description}</p>
            <h3>PREÇO</h3>
            <h1>{priceCoin}</h1>
            <p>{priceMoney}</p>
            <div>
              <BotaoPrimario title="Comprar" icon={<RiShoppingCart2Line />} />
              <BotaoSecundario
                title="Ver mais"
                icon={<RiArrowDropRightLine />}
              />
            </div>
          </S.descriptionContainer>
          <S.imageContainer>
            <img src={image} alt="" />
          </S.imageContainer>
        </S.Content>
      </S.Container>
    </>
  );
};

export default cardDestaque;
