import { TouchableOpacity } from "react-native";

import { Text, View } from "../../Themed";
import React, { useState } from "react";
import Colors from "../../../constants/Colors";

export default function Dropdown({ items, selectedIndex, onChange }) {
  const [open, setOpen] = useState(false);

  return (
    <View style={{ borderWidth: 1, padding: 5 }}>
      <TouchableOpacity
        style={{ padding: 10 }}
        onPress={() => {
          setOpen(!open);
        }}
      >
        <Text>{items[selectedIndex].name}</Text>
      </TouchableOpacity>

      {!!open && (
        <View
          style={{
            borderWidth: 1,
            backgroundColor: Colors.light.tint,
            // position: "absolute",
            zIndex: 10,
          }}
        >
          {items.map((item, index) => (
            <TouchableOpacity
              style={{ padding: 10, borderBottomWidth: 1, borderColor: "#fff" }}
              key={`${index}-${item.name}`}
              onPress={() => {
                onChange(item, index);
              }}
            >
              <Text style={{ color: "#fff" }}>{item.name}</Text>
            </TouchableOpacity>
          ))}
        </View>
      )}
    </View>
  );
}
