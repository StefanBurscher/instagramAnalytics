import { Text, View } from "../Themed";
import RegularLayout from "../layouts/RegularLayout";
import Checkbox from "expo-checkbox";
import React, { useContext } from "react";
import MainContext from "../../context/main-context";
import HashtagsList from "../organisms/HashtagsList";
import Dropdown from "../atoms/Dropdown";
import CommentsCounter from "../organisms/CommentsCounter";
import ProgressBar from "../atoms/ProgressBar";
import {
  getInitialChecklistFlags,
  initialChecklistArray,
} from "../../constants/initialState";

export default function ChecklistTabScreen() {
  const {
    checklist: {
      data: [checklistData, changeChecklist],
    },
  } = useContext(MainContext);

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
      <View>
        <ProgressBar
          currentValue={finishedTasks}
          maxValue={5}
          onRefresh={refresh}
          lastClearTimestamp={lastClearTimestamp}
          daysStrike={daysStrike}
        />
        {initialChecklistArray.map((checklist) => (
          <View
            style={{
              flexDirection: "row",
              marginVertical: 5,
              alignItems: "center",
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
          </View>
        ))}
      </View>
    </RegularLayout>
  );
}
