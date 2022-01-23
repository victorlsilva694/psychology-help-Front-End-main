import { observer } from "mobx-react-lite";
import { authContext } from "../../../stores/AuthStore";
import { Container, Row } from "react-bootstrap";
import * as S from "./style";
import { useContext, useEffect } from "react";

function FobiasGerais() {
  const store = useContext(authContext);

  return (
    <Container>
      <S.TitleAnsiedade>
        <strong>Fobias Gerais</strong>
      </S.TitleAnsiedade>
      <br />
      <S.BodyAniedade>
        A fobia é um tipo de transtorno de ansiedade caracterizado pelo medo
        irracional de uma situação, atividade, lugar, objeto ou animal, mesmo
        que isso não represente qualquer perigo. Ou seja, a ansiedade que uma
        pessoa fóbica sente é desproporcional à circunstância em si.
      </S.BodyAniedade>

      <S.TratamentoAnsiedade>
        <strong>
          <p>
            O tratamento de uma fobia deve ser iniciado após um diagnóstico
            minucioso, que abranja aspectos físicos, cognitivos e psicossociais.
            Essa avaliação clínica detalhada serve como ponto de partida para a
            escolha das técnicas mais eficazes para atender às necessidades
            específicas de cada paciente.
          </p>
        </strong>
      </S.TratamentoAnsiedade>
    </Container>
  );
}

export default observer(FobiasGerais);
