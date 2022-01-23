import { observer } from "mobx-react-lite";
import { Container, Row, Col } from "react-bootstrap";
import * as S from "./style";
import { authContext } from "../../stores/AuthStore";
import React, { createContext, useContext, useState } from "react";
import SideBar from "../../components/DashBoard/SideBar";
import NavBar from "../../components/NavBar";
import ContainerPresentation from "../../components/DashBoard/ContainerPresentation";
import EmotionPerson from "../../components/DashBoard/EmotionPerson";
import Footer  from "../../components/Footer";

function DashBoard() {
  const store = useContext(authContext);
  return (
    <>
      <SideBar />
      <ContainerPresentation />
      <br />
      <EmotionPerson />
      <Footer />
    </>
  );
}

export default observer(DashBoard);
