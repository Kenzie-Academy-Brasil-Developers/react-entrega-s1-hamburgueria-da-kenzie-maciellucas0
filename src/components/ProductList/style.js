import styled from "styled-components";

export const ContainerGeral = styled.main`
  width: 100%;
  height: 100%;

  position: relative;

  display: flex;
  flex-direction: column;
  justify-content: space-between;

  img {
    width: 265px;
  }

  li {
    width: 270px;
  }

  @media screen and (min-width: 800px) {
    width: 100vw;
    display: flex;
    flex-direction: row;

    ul {
      flex-wrap: wrap;
      width: 900px;
      margin: 35px 0 0 8%;
    }

    button {
      margin-left: 70px;
    }

    #containerMaior {
      margin-right: 100px;
      margin-top: 30px;
    }
  }
`;

export const UlListaProdutos = styled.ul`
  display: flex;
  margin-top: 10px;
  overflow: auto;

  @media screen and(min-width: 800px) {
    background-color: red;
  }

  h3 {
    font-family: "Inter";
    font-weight: 700;
    font-size: 18px;
    line-height: 24px;
    margin: 10px 0 0 15px;
  }

  p {
    font-family: "Inter";
    font-style: normal;
    font-weight: 400;
    font-size: 12px;
    line-height: 16px;
    color: #828282;

    margin: 5px 0 0 15px;
  }

  #preco {
    font-family: "Inter";
    font-style: normal;
    font-weight: 600;
    font-size: 14px;
    line-height: 24px;
    color: #27ae60;
  }
`;

export const Botao = styled.button`
  padding: 0px 15px;
  height: 35px;
  width: 105px;

  margin: 15px;

  background-color: #27ae60;

  border-style: none;
  border-radius: 4px;

  font-family: "Inter";
  font-size: 10px;
  color: #ffffff;

  cursor: pointer;
`;

export const LiListaProdutos = styled.li`
  list-style: none;
  width: 230px;

  margin: 10px;

  border: solid 2.5px #e0e0e0;
  border-radius: 5px;
`;

export const ImagemListaProdutos = styled.img`
  width: 99.8%;
  height: 210px;

  background-color: #f5f5f5;
`;
