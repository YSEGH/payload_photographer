import axios from "axios";

const setMenuLinks = async (dispatch) => {
  dispatch({ type: "GET_PAGES_REQUEST" });
  try {
    const { data } = await axios.get(
      `${process.env.NEXT_PUBLIC_SERVER_URL}/api/globals/menu`
    );
    dispatch({ type: "GET_PAGES_SUCCESS", data: data.links ? data.links : [] });
  } catch (error) {
    dispatch({ type: "GET_PAGES_ERROR", error: error.message });
  }
};

export { setMenuLinks };
