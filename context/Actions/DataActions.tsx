import axios from "axios";
import { setQuery } from "../../utilities/query";
import { filters } from "../../utilities/types";

const getPhotos = async (
  filters: filters,
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
};

const sendForm = (form, dispatch) => {};

const setFormValue = (value, key, dispatch) => {
  dispatch({ type: "SET_FORM_VALUE", value: value, key: key });
};

export {
  getPhotos,
  getCategories,
  setSelectedCategories,
  sendForm,
  setFormValue,
};
