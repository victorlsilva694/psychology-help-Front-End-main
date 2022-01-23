import { observer } from "mobx-react-lite";
import { authContext } from "../../../stores/AuthStore";
import React, { createContext, useContext, useState } from "react";
import { Container } from "react-bootstrap";
import imageOne from './img/undraw_chat_bot_re_e2gj.svg';
import * as S from './style';
import { useNavigate } from "react-router-dom";
  
function SessionOne() {
  const store = useContext(authContext);
  const navigate = useNavigate();
  const redirectNavigate = () => {
    navigate('/User/DashBoard/chatInteractive', {
      replace: true
    });
  }
  return(
   <>
    <S.imageWall>
      <S.ContainerTextBody>
        <S.TitleBrand>
          <strong>Seja Bem vindo novamente {store.user.name}!</strong>
        </S.TitleBrand>

        <S.SubtitleBrand>
          Trouxemos novidades! Agora você poderá conversar com pessoas diretamente na nossa plataforma.
        </S.SubtitleBrand>

        <S.ButtonEntryChat onClick={redirectNavigate}>
          <strong>Entrar no chat</strong>
        </S.ButtonEntryChat>
      </S.ContainerTextBody>
        <br />
        <br />
      <S.ImageChatBrand>
          <img src={imageOne} alt="" />
      </S.ImageChatBrand>
    </S.imageWall>
   </>
  );
}

export default observer(SessionOne);