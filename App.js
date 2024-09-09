import React, { useEffect } from "react";
import { StatusBar, SafeAreaView, Platform, LogBox } from "react-native";
import Index from "./src/Index";
import AppConfig from "./src/AppConfig";
import * as Updates from "expo-updates";

export default App = () => {
  LogBox.ignoreAllLogs()

  useEffect(() => {
    async function updateApp() {
      const { isAvailable } = await Updates.checkForUpdateAsync();

      if (isAvailable) {
        await Updates.fetchUpdateAsync();
        await Updates.reloadAsync();
      }
    }

    updateApp();
  }, []);

  if (Platform.OS === "ios") {
    return (
      <>
        <SafeAreaView
          style={{ flex: 0, backgroundColor: AppConfig.ColorTheme }}
        />
        <SafeAreaView
          style={{ flex: 1, backgroundColor: AppConfig.ColorTheme }}
        >
          <Index />
        </SafeAreaView>
      </>
    );
  } else {
    return (
      <SafeAreaView style={{ flex: 1 }}>
        <StatusBar
          backgroundColor={AppConfig.ColorTheme}
          barStyle="light-content"
        />
        <Index />
      </SafeAreaView>
    );
  }
};
