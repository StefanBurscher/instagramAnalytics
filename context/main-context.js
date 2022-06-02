import React from "react";

const MainContext = React.createContext({
  groups: {
    data: [],
    indexes: [],
  },
});

export default MainContext;
