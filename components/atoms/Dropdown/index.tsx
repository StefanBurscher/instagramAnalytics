import { TouchableOpacity } from "react-native";

import { Text, View } from "../../Themed";
import React, { useState } from "react";

export default function Dropdown({ items, selectedIndex, onChange }) {
  const [open, setOpen] = useState(false);

  return (
    <View style={{ borderWidth: 1, padding: 5 }}>
      <TouchableOpacity
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
            backgroundColor: "yellow",
            position: "relative",
            top: 0,
            zIndex: 100,
          }}
        >
          {items.map((item, index) => (
            <TouchableOpacity
              key={`${index}-${item.name}`}
              onPress={() => {
                onChange(item, index);
              }}
            >
              <Text>{item.name}</Text>
            </TouchableOpacity>
          ))}
        </View>
      )}
    </View>
  );
}
