import * as S from "./styles";
import { observer } from "mobx-react-lite";
import {
  Button,
  Nav,
  Container,
  Form,
  FormControl,
  Navbar,
  NavDropdown,
} from "react-bootstrap";
import brand from "./img/pinheiro.png";

function NavBar() {
  return (
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
            <Nav.Link href="#action1">Quem somos?</Nav.Link>
            <Nav.Link href="#action2">Ajuda</Nav.Link>
            <Nav.Link href="/login">
              Entrar
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default observer(NavBar);
