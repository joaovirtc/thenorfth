import styled from "styled-components";

export const Container = styled.div`
  width: 100vw;
  height: 90vh;
  margin-top: 200px;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  h1 {
    color: #fff;
    padding-bottom: 20px;
    font-size: 40px;
  }
`;

export const Content = styled.div`
  width: 90%;
  height: 90%;
  background: #0f0f0f;
  border-radius: 16px;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

export const descriptionContainer = styled.div`
  width: 60%;
  height: 95%;
  align-items: flex-start;
  display: flex;
  justify-content: space-around;
  flex-direction: column;
  padding: 0 0 10px 30px;
  color: #fff;
  h1 {
    font-style: normal;
    font-weight: 700;
    font-size: 30px;
    line-height: 49px;
    text-transform: uppercase;
  }

  h3 {
    font-weight: 500;
    font-size: 24px;
    line-height: 39px;
  }

  p {
    font-weight: 300;
    font-size: 16px;
    line-height: 24px;
    padding: 0 10px 0 0;

    color: rgba(255, 255, 255, 0.56);
  }

  div {
    width: 60%;
    display: flex;
    justify-content: space-between;
  }
`;
export const imageContainer = styled.div`
  width: 40%;
  height: 95%;
  display: flex;
  justify-content: flex-end;
  align-items: center;
  img {
    padding: 20px;
  }
`;
