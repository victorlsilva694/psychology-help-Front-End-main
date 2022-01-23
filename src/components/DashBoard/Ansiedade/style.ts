import styled from "styled-components";

export const TitleAnsiedade = styled.h1`
  color: #00766f;
  font-family: "Scope One";

  @media (max-width: 900px) {
    font-size: max(8vw, 12px);
  }
`;

export const BodyAniedade = styled.p`
  color: black;
  font-family: "Scope One";
  font-size: max(1.2vw, 10px);

  @media (max-width: 900px) {
    font-size: max(4vw, 12px);
  }
`;

export const TratamentoAnsiedade = styled.div`
  background-color: #BEECE9;
  width: 100%;
  border-radius: 5px;
  height: 150px;
  margin-top: 5%;

  @media (max-width: 900px) {
    height: 180px;
  }

  p {
    color: black;
    font-family: "Open Sans";
    font-size: max(1vw, 10px);
    padding: 20px;

    @media (max-width: 900px) {
      font-size: max(2.5vw, 12px);
    }
  }
`;
