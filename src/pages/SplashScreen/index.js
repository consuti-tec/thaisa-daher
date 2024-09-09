import React, { useEffect } from "react";
import * as Updates from "expo-updates";
import AppConfig from "../../AppConfig";

import { Container, SplashImage } from "./styles";

const SplashScreen = ({ navigation }) => {
  useEffect(() => {
    setTimeout(() => {
      navigation.navigate("Portal");
    }, AppConfig.TimeSplashScreen);

    checkUpdates();
  }, []);

  async function checkUpdates() {
    const { isAvailable } = Updates.checkForUpdateAsync();
    if (isAvailable) {
      await Updates.fetchUpdateAsync();
      await Updates.reloadAsync();
    }
  }

  return (
    <Container>
      <SplashImage
        resizeMode="contain"
        source={require("../../../assets/splash.png")}
      />
    </Container>
  );
};

export default SplashScreen;
