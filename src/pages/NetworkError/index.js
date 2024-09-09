import React from "react";

import { Container, Title, Description, Button, ButtonText } from "./styles";

const NetworkError = ({ navigation }) => {
  return (
    <Container>
      <Title>Sem Conexão!</Title>
      <Description>
        Cheque sua conexão com a internet e tente novamente
      </Description>
      <Button onPress={() => navigation.navigate("Portal")}>
        <ButtonText>TENTAR NOVAMENTE</ButtonText>
      </Button>
    </Container>
  );
};

export default NetworkError;
