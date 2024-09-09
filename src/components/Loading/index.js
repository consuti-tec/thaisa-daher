import React from "react";
import { Text, ActivityIndicator } from "react-native";

import { Container, Loader } from "./styles";
import AppConfig from "../../AppConfig";

const Loading = ({ loading }) => {

  if (!loading) return null

  return (
    <Container>
      <Loader>
        <ActivityIndicator size={30} color={AppConfig.ColorTheme} />
        <Text
          style={{ marginTop: 20, color: AppConfig.ColorTheme, fontSize: 18 }}
        >
          Carregando...
        </Text>
      </Loader>
    </Container>
  );
};

export default Loading;
