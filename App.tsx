import { StatusBar } from "expo-status-bar";
import { SafeAreaProvider } from "react-native-safe-area-context";

import useCachedResources from "./hooks/useCachedResources";
import useColorScheme from "./hooks/useColorScheme";
import Navigation from "./navigation";

import { ThemeProvider, createTheme } from "@rneui/themed";
import MainContext from "./context/main-context";
import useContextApi from "./hooks/useContextApi";
import usePushNotifications from "./hooks/notification";
import * as Notifications from "expo-notifications";
import React from "react";

Notifications.setNotificationHandler({
  handleNotification: async () => ({
    shouldShowAlert: true,
    shouldPlaySound: false,
    shouldSetBadge: false,
  }),
});

const theme = createTheme({
  Button: {
    raised: true,
  },
});

export default function App() {
  const isLoadingComplete = useCachedResources();
  const contextValues = useContextApi();
  const colorScheme = useColorScheme();

  // Used for clearing storage!
  // const contextValues = {}
  // useEffect(() => {
  //   localstorage.clear();
  // }, []);

  if (!isLoadingComplete) {
    return null;
  } else {
    return (
      <SafeAreaProvider>
        <ThemeProvider theme={theme}>
          <MainContext.Provider value={contextValues}>
            <Navigation colorScheme={colorScheme} />
          </MainContext.Provider>
          <StatusBar />
        </ThemeProvider>
      </SafeAreaProvider>
    );
  }
}
