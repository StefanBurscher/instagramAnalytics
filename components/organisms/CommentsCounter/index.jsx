import { View } from "../../Themed";
import React, { useContext } from "react";
import MainContext from "../../../context/main-context";
import ProgressBar from "../../atoms/ProgressBar";

export default function CommentsCounter() {
  const {
    comments: {
      data: [comments, setComments],
    },
  } = useContext(MainContext);

  const maxCommentsPerDay = 90;

  const changeCommentCount = (count) => {
    setComments({ ...comments, count: `${count}` });
  };

  const decrementCommentCount = () => {
    const value = (Number(comments.count) || 0) - 1;
    changeCommentCount(Math.max(value, 0));
  };

  const incrementCommentCount = () => {
    const value = (Number(comments.count) || 0) + 1;
    changeCommentCount(value);
  };

  const refreshCommentCount = () => {
    setComments({ count: 0, lastClearTimestamp: Date.now() });
  };

  return (
    <View>
      <ProgressBar
        currentValue={comments.count}
        maxValue={maxCommentsPerDay}
        onIncrement={incrementCommentCount}
        onDecrement={decrementCommentCount}
        onRefresh={refreshCommentCount}
        lastClearTimestamp={comments.lastClearTimestamp}
      />
    </View>
  );
}
