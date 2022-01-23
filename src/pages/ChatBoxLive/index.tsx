import { observer } from "mobx-react-lite";
import * as S from "./style";
import { authContext } from "../../stores/AuthStore";
import React, { useEffect, useRef, useContext, useState } from "react";
import TextField from "@material-ui/core/TextField";
import io from "socket.io-client";
import {
  Container,
  FloatingLabel,
  Form,
  Row,
  Toast,
  ToastContainer,
} from "react-bootstrap";
import NavBar from "../../components/NavBar";

let socket = io("http://localhost:8080");
console.log(socket);

interface receivedMessage {
  name: string;
  userId: number;
  message: string;
}

function ChatBoxLive() {
  const store = useContext(authContext);

  const [message, setMessage] = useState("");
  const [receivedMessages, setReceivedMessages] = useState<receivedMessage[]>(
    []
  );
  function envMessage() {
    socket.emit("EnvMessageUser", {
      message,
      name: store.user.name,
      userId: store.user.id,
    });
  }
  const [position, setPosition] = useState("top-start");
  socket.on("EnvMessageUser", (messages: receivedMessage) => {
    setReceivedMessages([...receivedMessages, messages]);
  });
  return (
    <>
      <NavBar />
      <S.ContainerReceiveMessage style={{padding: '10px'}}>
        {receivedMessages.map(({ message, name, userId }) => {
          if (userId === store.user.id) {
            return (
              <>
                <Toast style={{width: "80%",padding: '10px', position: 'relative', left: '20%'}}> 
                  <Toast.Body>{message}</Toast.Body>
                </Toast>
              </>
            );
          } else {
            return (
              <>
                <br />
                <Toast style={{width: "80%", padding: '10px', position: 'relative', left: '0%'}}>
                    <Toast.Body>{message}</Toast.Body>
                  </Toast>
              </>
            );
          }
        })}
      </S.ContainerReceiveMessage>
      <br />
      <Container>
        <Row>
          <FloatingLabel
            controlId="floatingTextarea"
            label="Digite sua mensagem"
            className="mb-3"
          >
            <Form.Control
              onChange={(e) => setMessage(e.target.value)}
              as="textarea"
              placeholder="Leave a comment here"
            />
          </FloatingLabel>

          <button onClick={envMessage} style={{ height: "50px", width: '100%', color: 'white', border: 'none', backgroundColor: '#00766F' }}>
            Enviar
          </button>
        </Row>
      </Container>
    </>
  );
}

export default observer(ChatBoxLive);
