import styled from "styled-components";

export const SectionCarrinho = styled.section`
  width: 93%;
  margin-top: 2rem;
  display: flex;
  flex-direction: column;

  background-color: #f5f5f5;
  height: 200px;

  margin: 20px 3.5% 0 3.5%;
  border-radius: 0 0 5px 5px;

  div {
    display: flex;
    align-items: center;
    font-family: "Inter";
    font-size: 13px;
    font-weight: 900;

    background-color: #27ae60;
    color: white;

    height: 50px;
    padding: 15px;
    border-radius: 5px 5px 0 0;
  }

  p {
    font-family: "Inter";
    font-style: normal;
    font-weight: 700;
    font-size: 14px;
    margin-top: 50px;

    text-align: center;
  }

  span {
    font-family: "Inter";
    font-style: normal;
    font-weight: 400;
    font-size: 14px;

    text-align: center;
    color: #828282;
  }
`;
