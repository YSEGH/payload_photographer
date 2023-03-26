import axios from "axios";
import qs from "qs";

let values = [
  {
    value: "France",
  },
  { value: "Paris" },
];

let and_query = [];
values.forEach((value, i) => {
  and_query.push({
    "categories.name": {
      equals: value.value,
    },
  });
});

const stringifiedQuery = qs.stringify(
  {
    where: { AND: and_query }, // ensure that `qs` adds the `where` property, too!
  },
  { addQueryPrefix: true }
);

const getPhotos = async (tag, dispatch) => {
  dispatch({ type: "GET_PHOTOS_REQUEST" });
  console.log(`/api/photo${stringifiedQuery}`);

  try {
    const { data } = await axios.get(`/api/photo${stringifiedQuery}`);
    console.log(data.docs);

    dispatch({ type: "GET_PHOTOS", data: data.docs });
  } catch (error) {
    dispatch({ type: "GET_PHOTOS_ERROR", data: error.message });
  }
};

export { getPhotos };
