// export const initialRouteName = "CommentsTab";
export const initialRouteName = "CompetitorsTab";

export const initialContextState = {
  groups: {
    data: [],
    indexes: [],
  },
  hashtags: {
    data: [],
    indexes: [],
  },
  comments: {
    data: []
  }
}


export const initialGroupsState = [
  { id: 1, name: "Travel", items: [{ username: "stefan.burscher" }] },
  { id: 2, name: "Travel srbija", items: [] },
];

export const initialGroupIndexState = 0


export const initialHashtagCategoriesState = [
  {
    name: "Traveling",
    items: [{ "name": "Traveling", "items": [{ "hashtag": "travel" }, { "hashtag": "travelblogger" }, { "hashtag": "travellife" }, { "hashtag": "travelbug" }, { "hashtag": "traveler" }, { "hashtag": "travelers" }, { "hashtag": "traveldiary" }, { "hashtag": "travellingthroughtheworld" }, { "hashtag": "holiday" }, { "hashtag": "holidayinthesun" }] }, { "name": "Blogging", "items": [{ "hashtag": "blog" }, { "hashtag": "fasion" }] }],
  },
  {
    name: "Blogging",
    items: [{ hashtag: "blog" }, { hashtag: "fasion" }],
  },
];

export const initialHashtagIndexState = 0

export const initialCommentsState = {
  count: 0,
  lastClearTimestamp: ""
}