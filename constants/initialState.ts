export const initialContextState = {
  groups: {
    data: [],
    indexes: [],
  },
  hashtags: {
    data: [],
    indexes: [],
  },
}


export const initialGroupsState = [
  { id: 1, name: "Travel", items: [{ username: "stefan.burscher" }] },
  { id: 2, name: "Travel srbija", items: [] },
];

export const initialGroupIndexState = 1


export const initialHashtagCategoriesState = [
  {
    name: "Traveling",
    items: [{ hashtag: "travel" }, { hashtag: "travelblogger" }],
  },
  {
    name: "Blogging",
    items: [{ hashtag: "blog" }, { hashtag: "fasion" }],
  },
];

export const initialHashtagIndexState = 0