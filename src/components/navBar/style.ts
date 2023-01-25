import styled from "styled-components";

export const Container = styled.div`
  width: 100vw;
  height: 80px;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: #040404;

  @media screen and (max-width: 800px) {
    justify-content: center;
  }
`;

export const ContainerNav = styled.nav`
  width: 80%;
  display: flex;
  align-items: center;
  justify-content: space-around;
  height: 100%;

  @media screen and (max-width: 800px) {
    width: 90%;
    justify-content: space-between;
  }
`;

export const ContainerLogo = styled.div`
  width: 20%;
  display: flex;
  align-items: center;
  justify-content: center;

  h1 {
    color: #fff;
    padding: 10px;
    font-size: 20px;
    font-family: "Orbitron";
  }

  @media screen and (max-width: 800px) {
    width: 40%;
    justify-content: space-between;
  }
`;

export const Links = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 35%;

  ul {
    display: flex;
    align-items: center;
    justify-content: space-between;
    width: 100%;
  }

  li {
    color: #ccc;
    padding: 10px;
    font-weight: 300;
    font-size: 16px;
    transition: color 0.2s ease-in;
  }

  li:hover {
    color: #fff;
  }

  @media screen and (max-width: 800px) {
    display: none;
  }
`;

export const iconsNav = styled.div`
  display: flex;
  width: 20%;
  display: flex;
  justify-content: center;
  align-items: center;

  @media screen and (max-width: 800px) {
    display: none;
  }
`;

export const menuMobile = styled.div`
  color: #fff;
  font-size: 30px;
  display: flex;
  align-items: center;
  display: none;

  @media screen and (max-width: 800px) {
    display: block;
  }
`;
