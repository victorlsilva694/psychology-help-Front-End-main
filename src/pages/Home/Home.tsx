import NavBar from "../../components/NavBar";
import SessionOne from "../../components/SessionOne";
import SessionTwo from "../../components/SessionTwo";
import SessionThree from "../../components/SessionThree";
import * as S from "./styles";
import Footer from "../../components/Footer";

function Home() {
  return (
    <>
      <NavBar />
      <SessionOne />
      <SessionTwo />
      <SessionThree />
      <Footer />
    </>
  );
}

export default Home;
