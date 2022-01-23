import * as S from "./style";
import { observer } from "mobx-react-lite";
import imgWallpaper from "./img/michiel-annaert-xayhhS6zzuY-unsplash (2).jpg";
import { FloatingLabel, Form } from "react-bootstrap";
import pinheiro from "./img/pinheiro.png";
import { useContext, useState } from "react";
import { useNavigate } from "react-router-dom";
import { authContext } from '../../stores/AuthStore';

function Login() {

  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();
  const store = useContext(authContext);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  async function handleClick() {
    try {
      setLoading(true);
      await store.login(email, password);
      navigate("/User/DashBoard");
    } catch (err) {
      console.log(err);
    } finally {
      setLoading(false);
    }
  }


  return (
    <>
      <S.ContainerImage>
        <S.ContainerImg src={imgWallpaper} alt="" />
        <S.ContainerForm>
          <S.ContainerMainForm>
            <S.ImageFlex>
              <img src={pinheiro} alt="" />
            </S.ImageFlex>
            <br />
            <br />
            <S.TitleForm>Entrar em sua conta</S.TitleForm>
            <S.IsMember>
              Ainda não tem uma conta?
              <S.link href="/register"> Crie sua conta</S.link>
            </S.IsMember>
            <FloatingLabel
              controlId="floatingInput"
              label="Email address"
              className="mb-3"
            >
              <Form.Control onChange={(e) => setEmail(e.target.value)} type="email" placeholder="name@example.com" />
            </FloatingLabel>
            <FloatingLabel controlId="floatingPassword" label="Password">
              <Form.Control onChange={(e) => setPassword(e.target.value)} type="password" placeholder="Password" />
            </FloatingLabel>          
            <br />
            <S.ButtonEnvForm onClick={handleClick}> 
              Entrar
            </S.ButtonEnvForm>
          </S.ContainerMainForm>

        </S.ContainerForm>
      </S.ContainerImage>
    </>
  );
}

export default observer(Login);
