import styled from "styled-components";

export const Container = styled.div`
  width: 99vw;
  height: 89vh;
  background-color: transparent;
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const Content = styled.div`
  width: 20%;
  height: 70%;
  display: flex;
  justify-content: flex-end;
  align-items: center;
  flex-direction: column;

  p {
    padding: 16px;
    margin-bottom: 10px;
    text-align: center;
    color: #fff;
    font-size: 16px;
  }

  @media screen and (max-width: 800px) {
    display: none;
  }
`;
export const contentPrincipal = styled.div`
  width: 60%;
  height: 99%;
  display: flex;
  align-items: center;
  justify-content: flex-start;
  flex-direction: column;

  div {
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    width: 90%;
  }

  h1 {
    color: #fff;
    font-size: 290px;
    background: linear-gradient(89.78deg, #ffffff 40.32%, #040404 93.05%);
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
    background-clip: text;
    font-family: "Montserrat";
    z-index: -1;
  }

  h3 {
    color: #fff;
    letter-spacing: 8px;
    font-weight: 800;
    background: linear-gradient(90deg, #00cc52 0%, #105261 100%);
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
    background-clip: text;
    font-size: 27px;
    font-family: "Montserrat";
  }

  div {
    position: absolute;
  }
`;

export const ContainerIMG = styled.div`
  position: absolute;
  top: 30%;

  img {
    width: 600px;
  }
`;

export const Content__ = styled.div`
  width: 20%;
  height: 70%;
  display: flex;
  align-items: center;
  justify-content: flex-end;
  flex-direction: column;

  div {
    margin-bottom: 30px;
  }

  h2 {
    font-style: normal;
    font-weight: 700;
    font-size: 26px;
    line-height: 49px;
    text-align: center;
    color: #fff;
  }

  p {
    color: rgba(255, 255, 255, 0.33);
    font-style: normal;
    font-weight: 500;
    font-size: 16px;
    line-height: 19px;
    text-align: center;
  }

  @media screen and (max-width: 800px) {
    display: none;
  }
`;

export const promotionContainer = styled.div`
  width: 100vw;
  height: 80vh;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const promotionContent = styled.div`
  width: 80%;
  height: 90%;
  display: flex;
  align-items: center;
  justify-content: space-between;

  div {
    width: 50%;
    height: 70%;
    display: flex;
    align-items: flex-start;
    flex-direction: column;
    justify-content: space-evenly;
    color: #fff;
    padding: 10px;

    p {
      color: #ccc;
    }

    @media screen and (max-width: 800px) {
      width: 100%;
      height: 100%;
      justify-content: space-between;
    }
  }
  section {
    width: 50%;
    height: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
  }

  @media screen and (max-width: 800px) {
    flex-direction: column;
    height: 100%;
  }
`;

export const Blur = styled.div`
  width: 200px;
  height: 200px;
  border-radius: 100%;
  background: #00cc52;
  filter: blur(200px);
  position: relative;
  z-index: -1000;
`;
