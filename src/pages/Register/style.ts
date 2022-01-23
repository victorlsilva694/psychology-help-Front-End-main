import styled from 'styled-components';

export const ContainerImage = styled.div`
  width: 100%;
  background-color: rgb(240, 240, 240);
  display: flex;
  height: 100vh;
  
`;
export const ContainerImg = styled.img`
  width: 40%;

  @media(max-width: 800px){
    display: none;
  }
`;

export const ContainerForm = styled.div`
  width: 60%;
  height: 100vh;
  @media(max-width: 800px){
    width: 100%;
  }
`;

export const ImageFlex = styled.div`
  width: 100%;
  height: 50px;
  display: flex;
  justify-content: center;
  align-items: center;

`;

export const ContainerMainForm = styled.div`
  width: 50%;
  position: relative;
  margin: 0 auto;
  margin-top: 5%;
  height: 650px;
  display: flex;
  flex-direction: column;
  justify-content: center;

  @media(max-width: 800px){
    width: 80%;
  }

  img{
    float: center;
    width: 100px;
    height: 100px;
  }
`;

export const TitleForm = styled.h1`
  font-family: 'Scope One';
  font-style: max(1.5vw, 10px);
  text-align: center;
  margin-top: 10px;
`;

export const IsMember = styled.p`
  font-size: max(.9vw, 10px);
  text-align: center;
`;

export const link = styled.a`
  text-decoration: none;
  
`;

export const ContainerLinks = styled.div`
  width: 100%;
  height: 20px;
  display: flex;
`;

export const ButtonEnvForm = styled.button`
  width: 100%;
  height: 50px;
  background-color: #00766F;
  border: none;
  color: white;
  font-family: 'Roboto';
  border-radius: 3px;
`;