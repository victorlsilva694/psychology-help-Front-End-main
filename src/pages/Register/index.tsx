import { observer } from "mobx-react-lite";
import { Col, FloatingLabel, Form, Row } from "react-bootstrap";
import * as S from "./style";
import imgWallpaper from "./img/michiel-annaert-xayhhS6zzuY-unsplash (2).jpg";
import pinheiro from "./img/pinheiro.png";
import React, { ChangeEvent, useContext, useState } from "react";
import { useNavigate } from "react-router-dom";
import { authContext } from "../../stores/AuthStore";

function RegisterUser() {
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();
 
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [name, setName] = useState("");
  const [ImageUser, setImageUser] = useState<File>();
 const store = useContext(authContext);

 async function handleClick(e: React.MouseEvent<HTMLButtonElement, MouseEvent>) {
  try {
      e.preventDefault()
      e.stopPropagation()
      setLoading(true);
      if(!ImageUser){
        throw new Error('zero erro')
      }
      await store.Register(name, ImageUser, email, password);
      navigate("/User/DashBoard");
    } catch (err) {
      console.log(err);
    } finally {
      setLoading(false);
    }
  }
  const validator = ({target: {files}}: ChangeEvent<HTMLInputElement>) => {
    if(!files){
      throw new Error('Primeiro erro');
    }
    if(files.length === 0 ){
      throw new Error('segundo error');
    }
    const [FileImageUser] = Array.from(files);
    setImageUser(FileImageUser)
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
              Já tem uma conta
              <S.link href="/login"> Entrar agora</S.link>
            </S.IsMember>

            <Row className="g-2">
              <Col md>
                <FloatingLabel
                  controlId="floatingInputGrid"
                  label="Digite seu nome completo"
                >
                  <Form.Control onChange={(e) => setName(e.target.value)} type="text" placeholder="Nome Completo" />
                </FloatingLabel>
              </Col>
              <Form.Group controlId="formFile" className="mb-3">
                <Form.Label>Coloque Sua foto de perfil</Form.Label>
                <Form.Control
                  type="file"
                  name="file"
                  onChange={(e) => validator(e as ChangeEvent<HTMLInputElement>)}
                />
              </Form.Group>
            </Row>
            <FloatingLabel
              controlId="floatingInput"
              label="Endereço de e-mail"
              className="mb-3"
            >
              <Form.Control onChange={(e) => setEmail(e.target.value)} type="email" placeholder="name@example.com" />
            </FloatingLabel>
            <FloatingLabel controlId="floatingPassword" label="Senha">
              <Form.Control onChange={(e) => setPassword(e.target.value)} type="password" placeholder="Senha" />
            </FloatingLabel>
            <br />
            <S.ButtonEnvForm onClick={(e) => handleClick(e)}>
              Entrar
            </S.ButtonEnvForm>
          </S.ContainerMainForm>
        </S.ContainerForm>
      </S.ContainerImage>
    </>
  );
}

export default observer(RegisterUser);
