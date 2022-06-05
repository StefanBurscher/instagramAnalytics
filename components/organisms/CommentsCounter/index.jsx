import { Text, View } from "../../Themed";
import React, { useContext } from "react";
import * as Progress from "react-native-progress";
import { getDimensions } from "../../../utils/layout";
import Colors from "../../../constants/Colors";
import MainContext from "../../../context/main-context";
import { TouchableOpacity } from "react-native";

export default function CommentsCounter() {
  const {
    comments: {
      data: [comments, setComments],
    },
  } = useContext(MainContext);

  const maxCommentsPerDay = 90;

  const percentage = comments.count / maxCommentsPerDay;
  const percentageBarWidth = getDimensions().screen.width - 20;

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

  const getCommentDatetime = () => {
    let formatedDate = "Never";
    if (comments.lastClearTimestamp) {
      var date = new Date(comments.lastClearTimestamp);
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
    <View>
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
              {comments.count}
            </Text>
            <Text style={{ color: "gray", fontSize: 15, lineHeight: 35 }}>
              /{maxCommentsPerDay}
            </Text>
          </View>

          <TouchableOpacity
            onPress={refreshCommentCount}
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
        </View>
        <View style={{ flexDirection: "row" }}>
          <TouchableOpacity
            onPress={decrementCommentCount}
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

          <TouchableOpacity
            onPress={incrementCommentCount}
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
        </View>
      </View>
      <Progress.Bar
        progress={percentage}
        width={percentageBarWidth}
        height={20}
        color={Colors.light.tint}
      />

      <View style={{ marginTop: 10, flexDirection: "row" }}>
        <Text>Last refreshed: </Text>
        <Text style={{ color: "gray" }}>{getCommentDatetime()}</Text>
      </View>
    </View>
  );
}
