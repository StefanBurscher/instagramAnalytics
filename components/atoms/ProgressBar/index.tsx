import { Text, View } from "../../Themed";
import React from "react";
import * as Progress from "react-native-progress";
import Colors from "../../../constants/Colors";
import { getDimensions } from "../../../utils/layout";
import ChecklistCounter from "../ChecklistCounter";

export default function ProgressBar({
  maxValue,
  currentValue,
  onRefresh,
  onIncrement,
  onDecrement,
  lastClearTimestamp,
  daysStrike,
}) {
  const progress = currentValue / maxValue;
  const percentageBarWidth = getDimensions().screen.width - 20;

  const getCommentDatetime = () => {
    let formatedDate = "Never";
    if (lastClearTimestamp) {
      var date = new Date(lastClearTimestamp);
      formatedDate =
        date.getDate() +
        "/" +
        (date.getMonth() + 1) +
        "/" +
        date.getFullYear() +
        " " +
        date.getHours() +
        ":" +
        date.getMinutes() +
        ":" +
        date.getSeconds();
    }

    return formatedDate;
  };

  return (
    <View style={{  }}>
      <ChecklistCounter
        maxValue={maxValue}
        currentValue={currentValue}
        onRefresh={onRefresh}
        onIncrement={onIncrement}
        onDecrement={onDecrement}
      />
      <Progress.Bar
        progress={progress}
        width={percentageBarWidth}
        height={20}
        color={Colors.light.tint}
      />
      {!!lastClearTimestamp && (
        <View style={{ marginTop: 10, flexDirection: "row" }}>
          <Text>Last refreshed: </Text>
          <Text style={{ color: "gray" }}>{getCommentDatetime()}</Text>
        </View>
      )}

      {typeof daysStrike !== "undefined" && (
        <View style={{ marginTop: 10, flexDirection: "row" }}>
          <Text>Strike days: </Text>
          <Text style={{ color: "gray" }}>{daysStrike}</Text>
        </View>
      )}

      <View
        style={{ backgroundColor: "#000", height: 1, marginVertical: 10 }}
      />
    </View>
  );
}
