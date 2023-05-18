const appReducer = (state, action) => {
  switch (action.type) {
    case "GET_PAGES_REQUEST":
      return { ...state };
    case "GET_PAGES_SUCCESS":
      return { ...state, menu: action.data };
    case "GET_PAGES_ERROR":
      return { ...state, error: action.error };
    default:
      return state;
  }
};

export { appReducer };
