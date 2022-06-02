import { StyleSheet } from "react-native";

import { Text, View } from "../../Themed";

export default function RegularScreen({ navigation, title, children }) {
  return (
    <View style={styles.container}>
      {!!title && (
        <>
          <Text style={styles.title}>{title}</Text>
          <View
            style={styles.separator}
            lightColor="#eee"
            darkColor="rgba(255,255,255,0.1)"
          />
        </>
      )}

      {children}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    // alignItems: "center",
    // justifyContent: "center",
  },
  title: {
    fontSize: 20,
    fontWeight: "bold",
  },
  separator: {
    marginVertical: 30,
    height: 1,
    width: "80%",
  },
});
