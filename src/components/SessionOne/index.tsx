import { observer } from "mobx-react-lite";
import { Container, Row } from "react-bootstrap";
import * as S from "./style";
import imageSession from './img/kelly-sikkema-f_aHTIof44U-unsplash.jpg'
import { useNavigate } from "react-router-dom";
function SessionOne() {
  const navigate = useNavigate();
  const redirectNavigate = () => {
    navigate('/login', {
      replace: true
    });
  }
  return (
    <S.ContainerFlex>
      <S.BodySession>
        <S.TitleBody>
          Faça contatos e crie amigos!
        </S.TitleBody>

        <S.ParagraphBody>
          Entre no Psychology help e desabafe. São milhares de motivos para
          que vc sobreviva de uma forma mais leve e divertida!
        </S.ParagraphBody>

        <S.ButtonEntry onClick={redirectNavigate}>
          Entrar
        </S.ButtonEntry>
      </S.BodySession>
      <S.BodySession>
        <img src={imageSession} alt="" />
      </S.BodySession>
    </S.ContainerFlex>
  );
}
export default observer(SessionOne);
