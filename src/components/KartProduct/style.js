import styled from "styled-components";

export const SectionCarrinho = styled.section`
  width: 90%;
  display: flex;
  flex-direction: column;

  background-color: #f5f5f5;
  height: 160px;
  overflow-x: hidden; /* Hide horizontal scrollbar */
  overflow-y: scroll; /* Add vertical scrollbar */

  border-radius: 5px;
  margin: auto;
  margin-top: 20px;
  div {
    width: 100%;
    display: flex;
    align-items: center;
    font-family: "Inter";
    font-size: 13px;
    font-weight: 900;

    background-color: #27ae60;
    color: white;

    height: 50px;
    padding: 15px;
    border-radius: 5px;
  }

  p {
    font-family: "Inter";
    font-style: normal;
    font-weight: 700;
    font-size: 14px;
    margin-top: 50px;

    text-align: center;
    margin-bottom: 5px;
  }

  span {
    font-family: "Inter";
    font-style: normal;
    font-weight: 400;
    font-size: 14px;

    text-align: center;
    color: #828282;
  }

  /* Carrinho com itens dentro*/

  ul {
    background-color: #f5f5f5;
    width: 90%;
  }

  li {
    display: flex;
    flex-direction: row;

    margin: 15px;
  }
  #divCarrinho {
    color: black;
    background-color: #f5f5f5;
  }
  h2 {
    width: 130px;
    font-family: "Inter";
    font-weight: 700;
    font-size: 17px;
    line-height: 24px;
  }

  img {
    width: 90px;
    height: 90px;
    background-color: #e0e0e0;

    border-radius: 5px;
  }

  button {
    border-style: none;
    background-color: #f5f5f5;
    font-family: "Inter";
    font-size: 12px;
    color: #828282;
    cursor: pointer;
    position: relative;
    right: 20%;
  }

  #pcarrinhoCheio {
    position: relative;
    right: 195px;
    color: #828282;
    font-weight: 200;
  }
`;

export const Linha = styled.img`
  width: 90%;
  height: 4px;
  margin: auto;
`;

export const DivTotalPrice = styled.div`
  margin: auto;
  background-color: #f5f5f5;
  width: 90%;
  display: flex;
  flex-direction: row;

  justify-content: space-between;
  height: 120px;

  h2 {
    margin-top: 15px;
    margin-left: 25px;
    font-family: "Inter";
    font-weight: 700;
    font-size: 17px;
    line-height: 24px;
  }

  p {
    margin-top: 20px;
    margin-right: 25px;
    color: #828282;
    font-weight: 200;
  }
`;

export const DivLinha = styled.div`
  margin-top: 20px;
  background-color: #f5f5f5;
  margin: auto;
  width: 90%;
  display: flex;
  justify-content: center;
`;

export const BotaoRemoverTudo = styled.button`
  width: 70%;
  padding: 8px;
  border: none;
  color: #828282;

  font-family: "Inter";
  font-style: normal;
  font-weight: 600;
  font-size: 16px;

  background: #e0e0e0;

  border: 2px solid #e0e0e0;
  border-radius: 8px;
  margin: auto;

  position: absolute;
  bottom: 20px;
  margin-left: 15%;
`;
