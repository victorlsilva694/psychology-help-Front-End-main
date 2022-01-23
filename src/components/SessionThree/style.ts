import styled from "styled-components";

export const ContainerSession = styled.div`
  width: 100%;
  display: flex;
  height: 600px;

  @media (max-width: 800px) {
    flex-direction: column;
    height: 600px;
  }
`;
export const ImageCOntainer = styled.div`
  width: 50%;
  height: 100%;
  overflow: hidden;
  @media (max-width: 800px) {
    width: 280px;
  }
  img {
    position: relative;
    width: 70%;
    margin: 120px;
    @media (max-width: 800px) {
      width: 90%;
      margin: 20px;
    }
  }
`;

export const ContainerBody = styled.div`
  width: 50%;
  height: 100%;
  display: flex;
  flex-direction: column;

  @media (max-width: 800px) {
    width: 100%;
  }
`;

export const TitleSession = styled.h1`
  font-size: max(2vw, 20px);
  font-family: "Open Sans";
  text-align: center;
  margin-top: 30px;
`;

export const SubTitle = styled.h3`
  font-size: max(1.2vw, 14px);
  font-family: "Open Sans";
  text-align: center;
  margin-top: 30px;
`;

export const ContainerServices = styled.div`
  width: 60%;
  position: relative;
  left: 20%;
  display: flex;
  flex-direction: column;
  top: 5%;
  height: 400px;

  @media (max-width: 800px) {
    top: 0%;
    height: 280px;
  }
`;

export const FlagItens = styled.div`
  display: flex;
  justify-content: space-space-around;
  width: 100%;
  height: 20%;
  margin-top: 20px;
  img {
    width: 30px;
    height: 30px;
  }
`;

export const Services = styled.h1`
  font-size: max(1.2vw, 14px);
  font-family: "Open Sans";
  text-align: left;
  margin-left: 10px;
  margin-top: 5px;
  color: black;
`;
