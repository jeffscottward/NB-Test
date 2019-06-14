export default function reducer(state, action) {
  switch (action.type) {
    case "ADD_DATA_TO_PEOPLE_TABLE":
      action.payload[""] = '▾'
      state.data.siteMap.pages.Settings.Defaults[
        "Custom Fields"
      ].People.table.push(action.payload);
      return { ...state };
    case "REMOVE_DATA_FROM_PEOPLE_TABLE":
      console.log(action.payload)
      delete state.data.siteMap.pages.Settings.Defaults["Custom Fields"].People
        .table[action.payload];
      return { ...state };
    default:
      return { ...state };
  }
}
