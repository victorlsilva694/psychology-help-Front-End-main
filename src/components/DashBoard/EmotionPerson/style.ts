import styled from "styled-components";

export const ComponentResponsive = styled.div`
  .flexResponsive {
    display: flex;
    @media (max-width: 900px) {
      flex-direction: column;
      align-items: center;
    }
  }
`;

export const ContainerOptions = styled.div`
  width: 20%;
  max-height: 50vh;

  @media (max-width: 900px) {
    width: 100%;
    max-height: 50vh;
    display: flex;
    align-items: center;
    flex-direction: column;
    justify-content: center;
  }
  div {
    h4 {
      cursor: pointer;
      font-family: "Open Sans";
      font-size: max(1.2vw, 12px);
      color: black;

      @media (max-width: 900px) {
        cursor: pointer;
        font-family: "Open Sans";
        font-size: max(3vw, 12px);
        color: black;
      }
    }
  }
`;

export const ConainerSelectedOptions = styled.div`
  width: 70%;
  margin-left: 10%;
  max-height: 100vh;

  @media (max-width: 900px) {
    display: flex;
    width: 100%;
    flex-direction: column;
    justify-content: center;
    margin-top: 10%;
    margin-left: 0%;
  }
`;

export const TitleOption = styled.h1`
  font-family: "Open Sans";
  font-size: max(1.4vw, 12px);
  color: black;

  @media (max-width: 900px) {
    font-size: max(4vw, 12px);
  }
`;
