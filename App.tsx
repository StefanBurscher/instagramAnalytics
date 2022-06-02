import { StatusBar } from "expo-status-bar";
import { SafeAreaProvider } from "react-native-safe-area-context";

import useCachedResources from "./hooks/useCachedResources";
import useColorScheme from "./hooks/useColorScheme";
import Navigation from "./navigation";

import { ThemeProvider, Button, createTheme } from "@rneui/themed";
import MainContext from "./context/main-context";
import { useState } from "react";

const theme = createTheme({
  Button: {
    raised: true,
  },
});

const initialState = [
  { id: 1, name: "Travel", items: [{ handle: "stefan.burscher" }] },
  { id: 2, name: "Travel srbija", items: [] },
];

export default function App() {
  const isLoadingComplete = useCachedResources();
  const colorScheme = useColorScheme();

  const [allGroups, setAllGroupsState] = useState(initialState);
  const [activeGroupIndex, setActiveGroupIndex] = useState(0);

  const contextValues = {
    groups: {
      data: [allGroups, setAllGroupsState],
      indexes: [activeGroupIndex, setActiveGroupIndex],
    },
  };

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
