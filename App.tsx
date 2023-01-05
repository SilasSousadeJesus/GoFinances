import React, { useCallback, useEffect, useState } from "react";
import { ThemeProvider } from "styled-components";
import * as SplashScreen from "expo-splash-screen";
import * as Font from "expo-font";
import {
  useFonts,
  Poppins_400Regular,
  Poppins_500Medium,
  Poppins_700Bold,
} from "@expo-google-fonts/poppins";

import theme from "./src/screens/global/styles/theme";

import { Dashboard } from "./src/screens/Dashboard";
import { View } from "react-native";

export default function App() {
  const [appIsReady, setAppIsReady] = useState(false);

  useEffect(() => {
    (async () => {
      try {
        await SplashScreen.preventAutoHideAsync();
        await Font.loadAsync({
          Poppins_400Regular,
          Poppins_500Medium,
          Poppins_700Bold,
        });
      } catch {
        // handle error
      } finally {
        setAppIsReady(true);
      }
    })();
  }, []);



  const onLayout = useCallback(() => {
    if (appIsReady) {
      SplashScreen.hideAsync();
    }
  }, [appIsReady]);

  if (!appIsReady) {
    return null;
  }

  return (
    <ThemeProvider theme={theme}>
      <View onLayout={onLayout} style={{width: '100%', height: '100%'}}>
        <Dashboard />
      </View>
    </ThemeProvider>
  );
}
