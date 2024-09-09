import * as React from "react";
import { createAppContainer, createSwitchNavigator } from "react-navigation";
import "react-native-gesture-handler";

import SplashScreen from "./pages/SplashScreen";
import Portal from "./pages/Portal";
import Painel from "./pages/Painel";
import NetworkError from "./pages/NetworkError";

const Routes = createAppContainer(
  createSwitchNavigator({
    SplashScreen,
    Portal,
    Painel,
    NetworkError,
  })
);

export default Routes;
