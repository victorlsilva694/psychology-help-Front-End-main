import { observer } from "mobx-react-lite";
import { authContext } from "../../../stores/AuthStore";
import { Container, Row } from "react-bootstrap";
import * as S from "./style";
import { useContext, useEffect } from "react";

function Depressao() {
  const store = useContext(authContext);

  return (
    <Container>
      <S.TitleAnsiedade>
        <strong>Depressão</strong>
      </S.TitleAnsiedade>
      <br />
      <S.BodyAniedade>
        Depressão (CID 10 – F33) é uma doença psiquiátrica crônica e recorrente
        que produz uma alteração do humor caracterizada por uma tristeza
        profunda, sem fim, associada a sentimentos de dor, amargura, desencanto,
        desesperança, baixa autoestima e culpa, assim como a distúrbios do sono
        e do apetite.
      </S.BodyAniedade>

      <S.TratamentoAnsiedade>
        <strong>
          <p>
            Depressão é uma doença que exige acompanhamento médico sistemático.
            Quadros leves costumam responder bem ao tratamento psicoterápico.
            Nos outros mais graves e com reflexo negativo sobre a vida afetiva,
            familiar e profissional e em sociedade, a indicação é o uso de
            antidepressivos com o objetivo de tirar a pessoa da crise.
          </p>
        </strong>
      </S.TratamentoAnsiedade>
    </Container>
  );
}

export default observer(Depressao);
