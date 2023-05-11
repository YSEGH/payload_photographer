const setMenuLinks = (links, dispatch) => {
  console.log(links);

  dispatch({ type: "SET_MENU_LINKS", data: links });
};

export { setMenuLinks };
