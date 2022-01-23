import styled from "styled-components";

export const ContainerReceiveMessage = styled.div`
  width: 80%;
  height: 60vh;
  display: flex;
  left: 10%;
  justify-content: end;
  flex-direction: column;
  position: relative;
  border-radius: 10px;
`;

export const SideBar = styled.div`
  width: 20%;
  border-radius: 10px;
  height: 100vh;
  border: 1px solid rgb(220,220,220);
  display: flex;
  flex-direction: column;
  
  
`;

export const Wallpaper = styled.img`
  width: 100px;
  height: 100px;
  border-radius: 100px;
`;

export const ContainerMessageUser = styled.div`
  display: flex;
  position: relative;
  padding: 10px;
  max-width: 80%;
  position: relative;
  left: 10%;
  flex-direction: column;
  text-align: right;
  word-break: break-all;
  background-color: rgb(240,240,240);
`;