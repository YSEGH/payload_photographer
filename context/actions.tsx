import axios from "axios";
import { PAGES } from "../utils/pages";

const setMenuLinks = async (dispatch) => {
  let links = [];
  dispatch({ type: "GET_PAGES_REQUEST" });
  try {
    const { data } = await axios.get(
      `${process.env.NEXT_PUBLIC_SERVER_URL}/api/globals/pages`
    );
    PAGES.forEach((page) => {
      if (data[page].navigation.active) {
        links.push(data[page]);
      }
    });
    links.sort((a, b) => (a.navigation.order > b.navigation.order ? 1 : -1));
    dispatch({ type: "GET_PAGES_SUCCESS", data: links });
  } catch (error) {
    dispatch({ type: "GET_PAGES_ERROR", error: error.message });
  }
};

const getLogo = async (dispatch) => {
  dispatch({ type: "GET_LOGO_REQUEST" });
  try {
    const { data } = await axios.get(
      `${process.env.NEXT_PUBLIC_SERVER_URL}/api/globals/settings`
    );
    dispatch({ type: "GET_LOGO_SUCCESS", data: data.logo.url });
  } catch (error) {
    dispatch({ type: "GET_LOGO_ERROR", error: error.message });
  }
};

export { setMenuLinks, getLogo };
