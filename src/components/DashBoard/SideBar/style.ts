import styled from "styled-components";


export const SideBarMainContainer = styled.div`
  width: 20%;
  height: 100vh;
  border: 1px solid rgb(220,220,220);

  @media(max-width: 900px){
    display: none;
  }
`;
export const ContainerBrand = styled.div`
  width: 50px;
  height: 50px;
`;

export const TitleBrand = styled.h1`
  font-family: 'Rubik';
  margin: 3px;
  text-align: center;
  font-size: max(1.2vw, 15px);

  span{
    color: #00850D;
  }
`;
export const Hamburguer = styled.div`
  width: 50px;
  height: 50px;
  display: none;
  margin: 20px;
  border-radius: 5px;
  background-color: rgb(200,200,200);

  @media(max-width: 900px){
    display: block;
  }
`;