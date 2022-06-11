import { Text, View } from "../Themed";
import RegularLayout from "../layouts/RegularLayout";
import Checkbox from "expo-checkbox";
import React, { useContext } from "react";
import MainContext from "../../context/main-context";
import ProgressBar from "../atoms/ProgressBar";
import {
  getInitialChecklistFlags,
  initialChecklistArray,
} from "../../constants/initialState";
import { TouchableOpacity } from "react-native";
import useColorScheme from "../../hooks/useColorScheme";
import Colors from "../../constants/Colors";

export default function ChecklistTabScreen() {
  const {
    checklist: {
      data: [checklistData, changeChecklist],
    },
  } = useContext(MainContext);
  const theme = useColorScheme()

  const { flags, daysStrike, lastClearTimestamp } = checklistData;

  const allFlags = Object.values(flags);
  const finishedTasks = allFlags.filter((flag) => !!flag).length;

  const changeFlag = (flag) => {
    changeChecklist({
      ...checklistData,
      flags: {
        ...checklistData.flags,
        [flag]: !flags[flag],
      },
    });
  };

  const refresh = () => {
    changeChecklist({
      ...checklistData,
      flags: getInitialChecklistFlags(),
      daysStrike: finishedTasks === allFlags.length ? daysStrike + 1 : 0,
      lastClearTimestamp: Date.now(),
    });
  };

  return (
    <RegularLayout>
      <View style={{
        backgroundColor: "transparent",
      }}>
        <ProgressBar
          currentValue={finishedTasks}
          maxValue={5}
          onRefresh={refresh}
          lastClearTimestamp={lastClearTimestamp}
          daysStrike={daysStrike}
        />

        {initialChecklistArray.map((checklist) => (
          <TouchableOpacity
            key={checklist.name}
            style={{
              flexDirection: "row",
              alignItems: "center",
              backgroundColor: "transparent",
              paddingVertical: 10,
              marginBottom: 10,
              borderBottomWidth: 1,
              borderColor: Colors[theme].text,
              // borderColor: "#fff"
            }}
            onPress={() => {
              changeFlag(checklist.name);
            }}
          >
            <Checkbox
              style={{ marginRight: 10 }}
              value={flags[checklist.name]}
              onValueChange={() => {
                changeFlag(checklist.name);
              }}
            />
            <Text style={{ fontWeight: "bold" }}>{checklist.title}</Text>
          </TouchableOpacity>
        ))}
      </View>
    </RegularLayout>
  );
}
