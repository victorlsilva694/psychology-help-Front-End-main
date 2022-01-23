import { observer } from "mobx-react-lite";
import { Carousel, Container, Row } from "react-bootstrap";
import * as S from "./style";
import imgAnxiety from "./img/e.png";
import imgDepression from "./img/depression 1.png";
import imgFobie from "./img/storm.png";
import imgvicio from "./img/addiction 1.png";

const arrImages = [
  {
    title: "Ansiedaede",
    img: imgAnxiety,
    Context: "Consiga ajuda com pessoas que já passaram por isso",
  },
  {
    title: "Ansiedaede",
    img: imgDepression,
    Context: "Consiga ajuda com pessoas que já passaram por isso",
  },
  {
    title: "Fobia Social",
    img: imgFobie,
    Context: "Consiga ajuda com pessoas que já passaram por isso",
  },
  {
    title: "Ansiedaede",
    img: imgvicio,
    Context: "Consiga ajuda com pessoas que já passaram por isso",
  },
];

function SessionTwo() {
  return (
    <S.ContainerServices>
      <S.TitleContainer>
        Você vai ter disponível um chat aberto por 24 horas para conversar com
        pessoas sobre todos os assuntos possíveis!
      </S.TitleContainer>
      <S.ContainerImages>
        {arrImages.map((values) => {
          return (
            <S.DivBodyCard>
              <img src={values.img} alt="" />
              <S.TitleCard>{values.title}</S.TitleCard>
              <S.SubTitleCard>{values.Context}</S.SubTitleCard>
            </S.DivBodyCard>
          );
        })}
      </S.ContainerImages>
    </S.ContainerServices>
  );
}

export default observer(SessionTwo);
