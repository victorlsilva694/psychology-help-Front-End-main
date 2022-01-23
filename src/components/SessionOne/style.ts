import styled from "styled-components";

export const ContainerFlex = styled.div`
  display: flex;
  width: 100%;
  height:500px;

  @media (max-width: 800px) {
    flex-direction: column;
    height:800px;
  }
  @media (max-width: 500px) {
    flex-direction: column;
    height:600px;
  }
`;

export const BodySession = styled.div`
  width: 50%;
  height: 50vh;
  align-items: center;
  display: flex;
  flex-direction: column;
  justify-content: left;

  img{
    width: 80%;
    border-radius: 15px;
    margin-top: 15px;
  }

  @media (max-width: 800px) {
    width: 100%;
    height: 60vh;
  }
`;

export const TitleBody = styled.h1`
  position: relative;
  font-family: "Scope One";
  position: relative;
  font-size: max(3vw, 30px);
  top: 15%;

  @media (max-width: 800px) {
    width: 80%;
  }
`;

export const ParagraphBody = styled.p`
  font-family: "Scope One";
  position: relative;
  font-size: max(1.5vw, 15px);
  top: 18%;
  width: 80%;

  @media (max-width: 800px) {
    font-size: 15px;
  }
`;

export const ButtonEntry = styled.button`
  width: 60%;
  font-family: "Roboto";
  margin-top: 12%;
  background-color: #007862;
  border: none;
  height: 50px;
  color: white;
  text-align: center;
  border-radius: 10px;
  
  @media (max-width: 800px) {
    margin-top: 18%;
  }
`;
