import styled from "styled-components";


export const Footer = styled.footer`
  font-family: nunito-sans, sans-serif;
  text-align: center;
  @media (min-width: 870px) {
    text-align: left;
  }
`;

export const TopBar = styled.div`
  margin: auto;
  max-width: 1280px;
  padding: 40px 0;
  @media (min-width: 870px) {
    padding: 45px 80px;
    display: flex;
    flex-flow: row;
    justify-content: space-between;
  }
`;

export const GetTheApp = styled.div`
  font-size: 18px;
  font-weight: 900;
  line-height: 1.11;
  color: #2b2738;
  margin: 0 -15px;
  display: flex;
  flex-flow: row;
  flex-wrap: wrap;
  @media (min-width: 870px) {
    flex-wrap: nowrap;
    align-items: center;
    white-space: nowrap;
  }
`;

export const GetTheAppTitle = styled.div`
  margin-bottom: 4px;
  font-family: 'Roboto';
  color: #0EB899;
  width: 100%;
  span {
    color: rgb(70,70,80);
  }
  @media (min-width: 870px) {
    width: unset;
    margin: 0 15px;
  }
`;

export const AppStoreApp = styled.img`
  width: 189px;
  height: 63px;
  margin: 16px auto;
  padding: 0 20px;
  @media (min-width: 870px) {
    padding: 0;
    margin: 0 8px;
  }
`;

export const GoogleApp = styled.img`
  width: 189px;
  height: 63px;
  margin: 16px auto;
  padding: 0 20px;
  @media (min-width: 870px) {
    padding: 0;
    margin: 0 8px;
  }
`;

export const DesktopSocialList = styled.div`
  display: none;
  @media (min-width: 870px) {
    display: flex;
    align-items: center;
  };
`;

export const MobileSocialList = styled.div`
  padding-bottom: 40px;
  width: 100%;
  @media (min-width: 870px) {
    display: none;
  };
`;

export const Twitter = styled.svg`
  border: 1px lightgray solid;
  width: 33px;
  height: 33px;
  margin-left: 5px;
`;

export const Facebook = styled.svg`
  border: 1px lightgray solid;
  width: 33px;
  height: 33px;
  margin-left: 5px;
`;

export const Instagram = styled.svg`
  border: 1px lightgray solid;
  width: 33px;
  height: 33px;
  margin-left: 5px;
`;

export const HR = styled.div`
  display: none;
  @media (min-width: 870px) {
    height: 0;
    padding: 0;
    margin: 0;
    display: block;
    border-bottom: 1px #cacada solid;
  };
`;

export const BottomBar = styled.div`
  max-width: 1280px;
  margin: auto;
  display: flex;
  flex-flow: row;
  flex-wrap: wrap;
  justify-content: center;
  @media (min-width: 870px) {
    flex-wrap: nowrap;
    padding: 40px 80px 60px;
    justify-content: space-between;
  };
`;

export const Menu = styled.div`
  margin-bottom: 30px;
  min-width: 50%;
  @media (min-width: 870px) {
    min-width: unset;
    margin-bottom: 0;
    margin-right: 40px;
  }
`;

export const MenuHead = styled.div`
  margin-bottom: 10px;
  font-size: 18px;
  font-weight: 900;
  line-height: 1.11;
  color: #2b2738;
`;

export const MenuLink = styled.a`
  display: block;
  text-decoration: none;
  font-size: 16px;
  font-weight: 600;
  line-height: 2;
  color: #004D3F;
  @media (min-width: 870px) {
    white-space: nowrap;
  }
`;

export const Policy = styled.div`
  width: 100%;
  max-width: 764px;
  font-size: 12px;
  line-height: 1.33;
  color: #2b2738;
  margin: 0 20px;
`;

export const PolicyRow = styled.p`
  margin: 0;
  padding: 0;
  padding-bottom: 20px;
`;