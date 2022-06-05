import { Button, Input as ThemendInput } from "@rneui/themed";
import React, { useState } from "react";
import { StyleSheet } from "react-native";
import Colors from "../../../constants/Colors";
import { View } from "../../Themed";

export default function Input({ value, onChangeText, placeholder }) {
  return (
    <View style={styles.inputContainer}>
      <ThemendInput
        style={styles.input}
        value={value}
        onChangeText={onChangeText}
        placeholder={placeholder}
        inputStyle={{ color: Colors.light.tint }}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  inputContainer: { width: "100%" },
  input: {},
});
