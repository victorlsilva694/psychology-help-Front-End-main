import styled from 'styled-components';

export const ContainerServices = styled.div`
  width: 100%;
  height: 500px;
  background-color: #004D3F;
  display: flex;
  align-items: center;
  flex-direction: column;
  justify-content: center;
  @media (max-width: 800px) {
    height: 900px;
  }
`;

export const TitleContainer = styled.h1`
  font-size: max(2.2vw, 15px);
  color: white;
  text-align: center;
  width: 80%;
  top: 80px;
  position: relative;
  font-family: 'Scope One';

  @media (max-width: 800px) {
    width: 80%;
  }
`;

export const ContainerImages = styled.h1`
  width: 80%;
  display: flex;
  height: 220px;
  margin: auto;
  text-align: left;

  @media (max-width: 800px) {
    width: 90%;
    flex-direction: column;
    position: relative;
    height: 600px;
  }
`;

export const DivBodyCard = styled.div`
  width: 100%;
  height: 220px;
  align-items: center;
  margin: 15px;
  display: flex;
  flex-direction: column;
  justify-content: center;
`;

export const TitleCard = styled.h1`
  font-family: 'Scope One';
  font-size: max(1.5vw, 15px);
  color: white;
  margin-top: 10px;
`;

export const SubTitleCard = styled.h1`
  font-family: 'Scope One';
  font-size: max(1vw, 15px);
  color: white;
  text-align: center;
`;