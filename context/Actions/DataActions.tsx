import axios from "axios";
import qs from "qs";

const setQueryParams = (categories) => {
  let andQuery = [];
  categories.forEach((category, i) => {
    andQuery.push({
      "categories.name": {
        equals: category.label,
      },
    });
  });
  return andQuery;
};
const setQuery = (categories, page) => {
  console.log("query", page);

  return qs.stringify(
    {
      where: { AND: setQueryParams(categories) },
      limit: 1,
      page: page,
    },
    { addQueryPrefix: true }
  );
};
const getPhotos = async (
  categories: [] = [],
  reset: boolean,
  page: number,
  dispatch
) => {
  console.log("ACTION CATEGORIE", categories);

  let stringifiedQuery = setQuery(categories, page);
  dispatch({ type: "GET_PHOTOS_REQUEST" });
  try {
    const { data } = await axios.get(
      `${process.env.NEXT_PUBLIC_SERVER_URL}/api/photo${stringifiedQuery}`
    );
    console.log(data.docs);

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
    console.log(data.docs);

    dispatch({ type: "GET_CATEGORIES", data: data.docs });
  } catch (error) {
    dispatch({ type: "GET_CATEGORIES_ERROR", data: error.message });
  }
};

const setSelectedCategories = (categories, dispatch) => {
  dispatch({ type: "SET_SELECTED_CATEGORIES", data: categories });
};

const sendForm = (form, dispatch) => {
  console.log(form);
};

const setFormValue = (value, key, dispatch) => {
  console.log(value);
  dispatch({ type: "SET_FORM_VALUE", value: value, key: key });
};

export {
  getPhotos,
  getCategories,
  setSelectedCategories,
  sendForm,
  setFormValue,
};
