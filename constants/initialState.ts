// export const initialRouteName = "CommentsTab";
export const initialRouteName = "ChecklistTab";
// export const initialRouteName = "CompetitorsTab";

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
  },
  checklist: {
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

export const initialChecklistArray = [
  { name: "replyToStory", title: "Reply to at least 5 of your followers stories", defaultValue: false, },
  { name: "commentsOnHashtags", title: "Engage with at least 10-15 posts relevant to your niche", defaultValue: false, }, // Engage with hashtags related to your niche
  { name: "commentsOnCompetitors", title: "Leave a high value comment on 5 of your competitors posts", defaultValue: false, },
  { name: "dailyStory", title: "Show up in your stories or on your feed", defaultValue: false, },
  { name: "followNewLeads", title: "Find 2-5 bew people to connect with", defaultValue: false, },
]


export const getInitialChecklistFlags = () => {
  const flags = {}
  Object.values(initialChecklistArray).forEach(checklist => {
    flags[checklist.name] = checklist.defaultValue
  });

  return flags
}


export const getInitialChecklistState = () => {
  return ({
    flags: getInitialChecklistFlags(),
    daysStrike: 0,
    lastClearTimestamp: ""
  })
}

