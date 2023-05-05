const formReducer = (state, action) => {
  switch (action.type) {
    case "SEND_FORM_REQUEST":
      return { ...state, loading: true, success: false };
    case "SEND_FORM_SUCCESS":
      return { ...state, loading: false, success: true, error: [] };
    case "SEND_FORM_ERROR":
      return {
        ...state,
        loading: false,
        error: action.data,
        success: false,
      };
    case "UPDATE_FORM_ERROR":
      let errors = state.error.filter((error) => error.name !== action.data);
      return { ...state, error: errors };
    case "RESET_FORM":
      return { ...state, success: false };
    default:
      return state;
  }
};

export { formReducer };
