import styled from "styled-components";

export const HeaderStyle = styled.header`
  width: 100vw;
  background-color: #f5f5f5;

  height: 139px;

  @media screen and (min-width: 800px) {
    display: flex;
    flex-direction: row;
    align-items: center;

    height: 80px;

    div {
      position: absolute;
      left: 5%;
    }

    input {
      position: absolute;
      right: 5%;
      width: 300px;
    }

    button {
      position: absolute;
      right: 5.5%;
      top: 2.75%;
    }
  }

  div {
    display: flex;
    flex-direction: row;
    align-items: baseline;
    padding: 20px;
    justify-content: center;
  }

  h1 {
    font-family: "Inter";
    font-weight: 700;
    font-size: 29px;
    font-style: bold;
  }

  span {
    font-family: "Inter";
    font-weight: 700;
    margin-left: 5px;
    color: #eb5757;
  }
`;

export const Input = styled.input`
  width: 90%;
  margin-left: 5%;
  padding: 0px 10px 0px 15px;
  height: 45px;

  border: solid 1px #e0e0e0;
  border-radius: 5px;

  ::placeholder {
    font-family: "Inter";
    font-size: 14px;
  }
`;

export const Botao = styled.button`
  padding: 0px 15px;
  height: 35px;

  background-color: #27ae60;

  border-style: none;
  border-radius: 4px;

  font-family: "Inter";
  font-size: 10px;
  color: #ffffff;

  position: absolute;
  right: 10%;
  top: 9.5%;

  cursor: pointer;
`;
