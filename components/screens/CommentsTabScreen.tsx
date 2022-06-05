import { View } from "../Themed";
import RegularLayout from "../layouts/RegularLayout";
import React, { useContext } from "react";
import MainContext from "../../context/main-context";
import HashtagsList from "../organisms/HashtagsList";
import Dropdown from "../atoms/Dropdown";
import CommentsCounter from "../organisms/CommentsCounter";

export default function CommentsTabScreen() {
  const {
    hashtags: {
      data: [hashtagCategories],
      indexes: [selectedCategoryIndex, setSelectedCategoryIndex],
    },
  } = useContext(MainContext);

  return (
    <RegularLayout>
      <View>
        <CommentsCounter />

        <Dropdown
          items={hashtagCategories}
          selectedIndex={selectedCategoryIndex}
          onChange={(item, itemIndex) => {
            setSelectedCategoryIndex(itemIndex);
          }}
        />
        <HashtagsList />
      </View>
    </RegularLayout>
  );
}
