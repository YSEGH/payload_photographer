import qs from "qs";

export const setQueryParams = (filters) => {
  let query = [];
  if (filters.title) {
    query.push({
      title: {
        equals: filters.title,
      },
    });
  }
  filters.categories.forEach((category, i) => {
    query.push({
      "categories.name": {
        equals: category.label,
      },
    });
  });
  console.log(query);

  return query;
};
export const setQuery = (filters, page) => {
  return qs.stringify(
    {
      where: { AND: setQueryParams(filters) },
      limit: 8,
      page: page,
    },
    { addQueryPrefix: true }
  );
};
