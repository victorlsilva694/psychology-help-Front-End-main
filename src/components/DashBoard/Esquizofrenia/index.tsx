import { observer } from "mobx-react-lite";
import { authContext } from "../../../stores/AuthStore";
import { Container, Row } from "react-bootstrap";
import * as S from "./style";
import { useContext, useEffect } from "react";

function Esquizofrenia() {
  const store = useContext(authContext);

  return (
    <Container>
      <S.TitleAnsiedade>
        <strong>Esquizofrenia</strong>
      </S.TitleAnsiedade>
      <br />
      <S.BodyAniedade>
        A esquizofrenia, ou distúrbio da mente dividida, é marcada por surtos em
        que o mundo real acaba substituído por delírios e alucinações. O
        transtorno afeta 2 milhões de brasileiros, mas a falta de conhecimento
        sobre ele só reforça estigmas. Hora de saber tudo sobre a condição que
        afeta 1% da população no planeta, dos sintomas ao tratamento.
      </S.BodyAniedade>

      <S.TratamentoAnsiedade>
        <strong>
          <p>
            Os remédios que silenciam a paranoia existem desde os anos 1970 e
            evoluíram enormemente de lá para cá. Os antipsicóticos do passado
            causavam muitos efeitos colateraisa as medicações mais recentes,
            conhecidas genericamente como segunda geração, provocam menos
            eventos adversos graves.
          </p>
        </strong>
      </S.TratamentoAnsiedade>
    </Container>
  );
}

export default observer(Esquizofrenia);
