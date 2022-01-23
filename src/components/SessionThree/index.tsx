import { observer } from "mobx-react-lite";
import { Carousel, Container, Row } from "react-bootstrap";
import imageHealth from "./img/undraw_crypto_portfolio_2jy5.svg";
import * as S from "./style";
import targetFlag from "./img/target.png";

const flagItens = [
  {
    image: targetFlag,
    description: "Chat 24 horas/7 dias",
  },
  {
    image: targetFlag,
    description: "Podemos te ajudar de formas gerais",
  },
  {
    image: targetFlag,
    description: "Pessoas dispostas a todo momentos a conversar",
  },
];

function SessionThree() {
  return (
    <S.ContainerSession>
      <S.ImageCOntainer>
        <img src={imageHealth} alt="" />
      </S.ImageCOntainer>
      <S.ContainerBody>
        <S.TitleSession>Nossos Serviços</S.TitleSession>
        <S.SubTitle>
          Nós vamos te ajudar com seus princípais problemas!
        </S.SubTitle>
        <S.ContainerServices>
          {flagItens.map((values) => {
            return (
              <S.FlagItens>
                <img src={values.image} alt="" />

                <S.Services>{values.description}</S.Services>
              </S.FlagItens>
            );
          })}
        </S.ContainerServices>
      </S.ContainerBody>
    </S.ContainerSession>
  );
}

export default observer(SessionThree);
