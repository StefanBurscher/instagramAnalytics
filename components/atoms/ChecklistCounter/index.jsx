import { Text, View } from "../../Themed";
import React from "react";
import Colors from "../../../constants/Colors";
import { TouchableOpacity } from "react-native";
import { Button } from "@rneui/themed";

export default function ChecklistCounter({
  maxValue,
  currentValue,
  onRefresh,
  onIncrement,
  onDecrement,
}) {
  return (
    <View
      style={{
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "center",
      }}
    >
      <View
        style={{
          flexDirection: "row",
          alignItems: "center",
        }}
      >
        <View
          style={{
            flexDirection: "row",
            alignItems: "flex-end",
          }}
        >
          <Text
            style={{
              color: Colors.light.tint,
              fontSize: 40,
              fontWeight: "bold",
            }}
          >
            {currentValue}
          </Text>
          <Text style={{ color: "gray", fontSize: 15, lineHeight: 35 }}>
            /{maxValue}
          </Text>
        </View>

        {!!onRefresh && (
          <TouchableOpacity
            onPress={onRefresh}
            style={{
              alignItems: "center",
              justifyContent: "center",
              backgroundColor: Colors.light.tint,
              width: 30,
              height: 30,
              marginLeft: 10,
            }}
          >
            <Text style={{ color: "#fff" }}>?</Text>
          </TouchableOpacity>
        )}
      </View>
      <View style={{ flexDirection: "row" }}>
        {!!onDecrement && (
          <TouchableOpacity
            onPress={onDecrement}
            style={{
              alignItems: "center",
              justifyContent: "center",
              backgroundColor: Colors.light.tint,
              width: 30,
              height: 30,
              marginRight: 10,
            }}
          >
            <Text style={{ color: "#fff" }}>-</Text>
          </TouchableOpacity>
        )}
        {!!onIncrement && (
          <TouchableOpacity
            onPress={onIncrement}
            style={{
              alignItems: "center",
              justifyContent: "center",
              backgroundColor: Colors.light.tint,
              width: 30,
              height: 30,
            }}
          >
            <Text style={{ color: "#fff" }}>+</Text>
          </TouchableOpacity>
        )}
      </View>
    </View>
  );
}
