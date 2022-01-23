import { observer } from "mobx-react-lite";
import { authContext } from "../../../stores/AuthStore";
import React, { createContext, useContext, useState } from "react";
import {
  Button,
  Nav,
  Row,
  Col,
  Container,
  Form,
  FormControl,
  Navbar,
  NavDropdown,
} from "react-bootstrap";
import * as S from '../../NavBar/styles';
import brand from "../../NavBar/img/pinheiro.png";
function SideBar() {
  const store = useContext(authContext);
  return (
    <>
      <Navbar bg="light" expand="lg">
        <Container fluid>
          <Navbar.Brand href="#" style={{ display: "flex" }}>
            <img src={brand} width={50} height={50} alt=""></img>
            <S.TitleBrand>
              Psychology <br />
              <span>
                <strong>Help</strong>
              </span>
            </S.TitleBrand>
            <S.ContainerBrand></S.ContainerBrand>
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="navbarScroll" />
          <Navbar.Collapse id="navbarScroll">
            <Nav
              className="me-auto my-2 my-lg-0"
              style={{ maxHeight: "100px" }}
              navbarScroll
            ></Nav>
            <Nav>
              <Nav.Link href="#action1">Converse com alguém</Nav.Link>
              <Nav.Link href="#action2">Entrar no Chat</Nav.Link>
              <Nav.Link href="/login">Sair</Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </>
  );
}

export default observer(SideBar);
