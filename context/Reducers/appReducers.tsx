const appReducer = (state, action) => {
  switch (action.type) {
    case "SET_MENU_LINKS":
      console.log(action);

      return { ...state, menu: action.data };
    default:
      return state;
  }
};

export { appReducer };
