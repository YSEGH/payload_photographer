const setMenuLinks = (links, dispatch) => {
  dispatch({ type: "SET_MENU_LINKS", data: links });
};

export { setMenuLinks };
