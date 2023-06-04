const appReducer = (state, action) => {
  switch (action.type) {
    case "GET_PAGES_REQUEST":
      return { ...state };
    case "GET_PAGES_SUCCESS":
      return { ...state, menu: action.data };
    case "GET_PAGES_ERROR":
      return { ...state, error: action.error };
    case "GET_LOGO_REQUEST":
      return { ...state };
    case "GET_LOGO_SUCCESS":
      console.log(action.data);

      return { ...state, logo: action.data };
    case "GET_LOGO_ERROR":
      return { ...state, error: action.error };
    default:
      return state;
  }
};

export { appReducer };
