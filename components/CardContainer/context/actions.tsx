import axios from "axios";
import { Filters } from "../types";
import { setQuery } from "../utils";

const getPhotos = async (
  filters: Filters,
  reset: boolean,
  page: number,
  dispatch
) => {
  let stringifiedQuery = setQuery(filters, page);
  dispatch({ type: "GET_PHOTOS_REQUEST" });
  try {
    const { data } = await axios.get(
      `${process.env.NEXT_PUBLIC_SERVER_URL}/api/photo${stringifiedQuery}`
    );
    dispatch({
      type: "GET_PHOTOS",
      data: data.docs,
      reset: reset,
      page: data.nextPage,
      hasNextPage: data.hasNextPage,
    });
  } catch (error) {
    dispatch({ type: "GET_PHOTOS_ERROR", data: error.message });
  }
};

const setScrollPosition = (scrollPosition: number, dispatch) => {
  dispatch({ type: "SET_SCROLL_POSITION", data: scrollPosition });
};

const getCategories = async (dispatch) => {
  dispatch({ type: "GET_CATEGORIES_REQUEST" });
  try {
    const { data } = await axios.get(
      `${process.env.NEXT_PUBLIC_SERVER_URL}/api/categories`
    );
    dispatch({ type: "GET_CATEGORIES", data: data.docs });
  } catch (error) {
    dispatch({ type: "GET_CATEGORIES_ERROR", data: error.message });
  }
};
const setSelectedCategories = (categories, dispatch) => {
  dispatch({ type: "SET_SELECTED_CATEGORIES", data: categories });
  dispatch({ type: "ORDER_SELECTED_CATEGORIES" });
};

export { getPhotos, getCategories, setSelectedCategories, setScrollPosition };
