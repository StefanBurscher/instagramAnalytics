import React from "react";
import { FlatList } from "react-native";

import ProfileListItem from "../../atoms/ProfileListItem";

export default function ProfileList({ items }) {
  return <FlatList data={items} renderItem={ProfileListItem} />;
}
