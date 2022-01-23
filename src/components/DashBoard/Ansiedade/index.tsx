import { observer } from "mobx-react-lite";
import { authContext } from "../../../stores/AuthStore";
import { Container, Row } from "react-bootstrap";
import * as S from "./style";
import { useContext, useEffect } from "react";

function Ansiedade() {
  const store = useContext(authContext);

  return (
    <Container>
      <S.TitleAnsiedade>
        <strong>Ansiedade</strong>
      </S.TitleAnsiedade>
      <br />
      <S.BodyAniedade>
        A ansiedade e os transtornos de ansiedade são um conjunto de doenças
        psiquiátricas marcadas pela preocupação excessiva ou constante de que
        algo negativo vai acontecer. Em especial durante as crises de ansiedade,
        as pessoas não conseguem se ater ao presente e sentem uma grande tensão,
        às vezes sem um motivo aparente. Esse problema pode manifestar sintomas
        físicos também, como sudorese e arritmia cardíaca.
      </S.BodyAniedade>

      <S.TratamentoAnsiedade>
        <strong>
          <p>
            O tratamento para ansiedade é feito de acordo com a intensidade dos
            sintomas e as necessidades de cada pessoa, podendo envolver a
            realização de psicoterapia e uso de medicamentos prescritos pelo
            médico, como antidepressivos ou ansiolíticos, que atuam a nível
            cerebral para reduzir os sintomas
          </p>
        </strong>
      </S.TratamentoAnsiedade>
    </Container>
  );
}

export default observer(Ansiedade);
