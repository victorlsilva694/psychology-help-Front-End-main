import { observer } from "mobx-react-lite";
import { authContext } from "../../../stores/AuthStore";
import { Container, Row } from "react-bootstrap";
import * as S from "./style";
import { ReactNode, useContext, useEffect, useState } from "react";
import Ansiedade from "../Ansiedade";
import Depressao from "../Depressao";
import Esquizofrenia from "../Esquizofrenia";
import Fobias_Gerais from "../Fobias_Gerais";

const typesProblems = [
  {
    id: 1,
    name: "Ansiedade",
  },
  {
    id: 2,
    name: "Depressão",
  },
  {
    id: 3,
    name: "Esquizofrenia",
  },
  {
    id: 4,
    name: "Fobias em gerais",
  },
];

function SessionOne() {
  const [selectedSituation, setSelectedSituation] = useState<ReactNode>(null);

  function SelectedOption(situation: string) {
    switch (situation) {
      case "Ansiedade":
        setSelectedSituation(<Ansiedade />);
        break;
      case "Depressão":
        setSelectedSituation(<Depressao />);
        break;
      case "Esquizofrenia":
        setSelectedSituation(<Esquizofrenia />);
        break;
      case "Fobias em gerais":
        setSelectedSituation(<Fobias_Gerais />);
        break;
    }
  }

  const store = useContext(authContext);
  return (
    <>
      <br />
      <br />
      <S.ComponentResponsive>
        <Container>
          <Row className="flexResponsive">
            <S.ContainerOptions>
              <S.TitleOption>Tipos de Doenças</S.TitleOption>
              <br />
              {typesProblems.map((problems) => {
                return (
                  <div onClick={() => SelectedOption(problems.name)}>
                    <h4>{problems.name}</h4>
                  </div>
                );
              })}
            </S.ContainerOptions>
            <S.ConainerSelectedOptions>
              {selectedSituation}
            </S.ConainerSelectedOptions>
          </Row>
        </Container>
      </S.ComponentResponsive>
    </>
  );
}

export default observer(SessionOne);
