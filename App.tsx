import React, { useCallback, useEffect, useState } from "react";
import { ThemeProvider } from "styled-components";
import * as SplashScreen from "expo-splash-screen";
import * as Font from "expo-font";
import {
  Poppins_400Regular,
  Poppins_500Medium,
  Poppins_700Bold,
} from "@expo-google-fonts/poppins";

import { Dashboard } from "./src/screens/Dashboard";
import { Register } from "./src/screens/Register";
import { View } from "react-native";
import theme from "./src/global/styles/theme";
import { CategorySelect } from "./src/screens/CategorySelect";

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
        <CategorySelect />
      </View>
    </ThemeProvider>
  );
}
