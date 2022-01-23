import * as S from "./style";
import { observer } from "mobx-react-lite";
import { Carousel, Container, Row } from "react-bootstrap";
const menu = [
  {
    name: "Contato",
    links: [
      { title: "Quem Somos?" },
      { title: "Entre em Contato"},
      { title: "Trabalhe conosco" },
    ],
  },
  {
    name: "Serviços",
    links: [
      { title: "Chat Interativo"},
      { title: "Ajuda 24 horas por dia"},
      { title: "Monitoramente de mensagens"},
    ],
  },
];

function Footer() {
  return (
    <S.Footer>
      <S.TopBar>
        <S.GetTheApp>
        </S.GetTheApp>
        <S.DesktopSocialList></S.DesktopSocialList>
      </S.TopBar>
      <S.HR />
      <S.BottomBar>
        {menu.map(({ name, links }) => (
          <S.Menu>
            <S.MenuHead>{name}</S.MenuHead>
            {links.map(({ title }) => (
              <S.MenuLink href="#">{title}</S.MenuLink>
            ))}
          </S.Menu>
        ))}
        <S.MobileSocialList>Psychology Help</S.MobileSocialList>
        <S.Policy>
          <S.PolicyRow>© 2022 - Psychology Help</S.PolicyRow>
          <S.PolicyRow>
            A plataforma Psychology Help não se responsabiliza por erros durante
            as vendas dos sistemas, golpes vindo de terceiros em ataques de
            phishing, produtos que não são o que se esperava ou que não
            agradaram o cliente de alguma forma.
          </S.PolicyRow>
          <S.PolicyRow>
            Nós da Psychology Help não temos vínculo algum com os vendedores nem
            mesmo com os cliente, somos somente uma plataforma de venda de
            produtos.
          </S.PolicyRow>
          <S.PolicyRow>
            Desde já agradecemos pela preferencia e desejamos que sinta-se a
            vontade dentro da nossa plataforma!
          </S.PolicyRow>
        </S.Policy>
      </S.BottomBar>
    </S.Footer>
  );
}
export default observer(Footer);