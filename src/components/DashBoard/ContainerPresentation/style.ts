import styled from "styled-components";
export const imageWall = styled.div`
  height: 600px;
  display: flex;
  justify-content: space-around;
  min-height: 100%;
  background-color: #004b3e;

  @media (max-width: 700px) {
    flex-direction: column;
    height: 900px;
  }

  @media (max-width: 900px) {
    flex-direction: column;
    height: 900px;
  }
`;

export const ContainerTextBody = styled.div`
  width: 30%;
  height: 40vh;
  margin: 15vh;
  @media (max-width: 900px) {
    width: 100%;
    height: 40vh;
    margin: 0;
    margin-top: 10vh;
  }
`;

export const TitleBrand = styled.h1`
  font-family: "Scope One";
  color: white;
  text-align: center;
  font-size: max(2vw, 15px);

  @media (max-width: 900px) {
    font-size: max(8vw, 15px);
  }
`;

export const SubtitleBrand = styled.p`
  font-family: "Open Sans";
  color: white;
  margin-top: 40px;
  text-align: center;
  font-size: max(1.3vw, 15px);
  @media (max-width: 900px) {
    font-size: max(4vw, 15px);
  }
`;

export const ButtonEntryChat = styled.button`
  width: 80%;
  position: relative;
  left: 10%;
  height: 60px;
  border-radius: 10px;
  color: white;
	margin-top: 50px;
  font-family: "Open Sans";
  border: none;
  background-color: #05382e;

	@media (max-width: 900px) {
		margin-top: 50px;
  }
`;

export const ImageChatBrand = styled.div`
  width: 50%;
  max-height: 50vh;

  @media (max-width: 1300px) {
    width: 90%;
    margin-top: 10%;
    max-height: 50vh;
  }

  @media (max-width: 900px) {
    width: 90%;
    max-height: 50vh;
  }

  img {
    width: 80%;
    margin: 5%;

    @media (max-width: 900px) {
      width: 80%;
			margin-top: 0px;
      max-height: 50vh;
    }
  }
`;
