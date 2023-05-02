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
};

const sendForm = async (form, dispatch) => {
  dispatch({
    type: "SEND_FORM_REQUEST",
  });
  try {
    const { data } = await axios.post(
      `${process.env.NEXT_PUBLIC_SERVER_URL}/api/form-submissions`,
      form
    );
    dispatch({
      type: "SEND_FORM_SUCCESS",
    });
  } catch (error) {
    let errors = error.response.data.errors[0].data.map((error) => {
      return JSON.parse(error.message);
    });
    dispatch({
      type: "SEND_FORM_ERROR",
      data: errors,
    });
  }
};

const updateFormErrors = (field, dispatch) => {
  dispatch({
    type: "UPDATE_FORM_ERROR",
    data: field,
  });
};

const resetForm = (dispatch) => {
  dispatch({
    type: "RESET_FORM",
  });
};

export {
  getPhotos,
  getCategories,
  setSelectedCategories,
  sendForm,
  resetForm,
  setScrollPosition,
  updateFormErrors,
};
