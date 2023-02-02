import * as S from "./styles";
import BotaoPrimario from "../../components/botaoPrimario";
import BotaoSecundario from "../../components/botaoSecundario";
import { RiArrowRightSLine } from "react-icons/ri";
import { RiAppleLine } from "react-icons/ri";
import NFT from "../../assets/img.png";
import CardDestaque from "../../components/cardDestaque";
import ImageDestaque from "../../assets/nft-card.png";
import Mockup from "../../assets/mockup.png";
export default function Home() {
  return (
    <>
      <S.Container>
        <S.Content>
          <p>
            Compre sua primeira NFT aqui <br />
            no principal market place de NFTs do mundo
          </p>
          <BotaoSecundario
            title="Explorar agora"
            icon={<RiArrowRightSLine />}
          />
        </S.Content>
        <S.contentPrincipal>
          <h3>FIRST</h3>
          <div>
            <h1>NFT</h1>
          </div>
          <S.ContainerIMG>
            <img src={NFT} alt="" />
          </S.ContainerIMG>
        </S.contentPrincipal>
        <S.Content__>
          <div>
            <h2>14 Mil+</h2>
            <p>Artwork</p>
          </div>
          <div>
            <h2>10 Mil+</h2>
            <p>Artistas</p>
          </div>
        </S.Content__>
      </S.Container>
      <S.Blur></S.Blur>
      <CardDestaque
        name="MONKEY ELEGANT"
        autor="@Ricky Wiliams"
        description="orem Ipsum is simply dummy text of the printing and typesetting
        industry. Lorem Ipsum has been the industry's standard dummy text
        ever since the 1500s, when an unknown printer took"
        priceCoin="10.95 ETH"
        priceMoney="R$ 5,473.90"
        image={ImageDestaque}
      />

      <S.promotionContainer>
        <S.promotionContent>
          <div>
            <h1>Conecte sua carteira</h1>
            <p>
              Conecte sua carteira Apple aqui, assim fica mais fácil você ter
              controle sobre suas financias, e também para ficar por dentro de
              todas as oscilações do mercado
            </p>
            <BotaoPrimario title="Conectar " icon={<RiAppleLine />} />
          </div>
          <section>
            <img src={Mockup} alt="" />
          </section>
        </S.promotionContent>
      </S.promotionContainer>
    </>
  );
}
