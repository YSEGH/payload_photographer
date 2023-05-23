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
      "categories.title": {
        equals: category.label,
      },
    });
  });
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

export const slugify = (str) => {
  str = str.replace(/^\s+|\s+$/g, "");

  // Make the string lowercase
  str = str.toLowerCase();

  // Remove accents, swap ñ for n, etc
  var from =
    "ÁÄÂÀÃÅČÇĆĎÉĚËÈÊẼĔȆÍÌÎÏŇÑÓÖÒÔÕØŘŔŠŤÚŮÜÙÛÝŸŽáäâàãåčçćďéěëèêẽĕȇíìîïňñóöòôõøðřŕšťúůüùûýÿžþÞĐđßÆa·/_,:;";
  var to =
    "AAAAAACCCDEEEEEEEEIIIINNOOOOOORRSTUUUUUYYZaaaaaacccdeeeeeeeeiiiinnooooooorrstuuuuuyyzbBDdBAa------";
  for (var i = 0, l = from.length; i < l; i++) {
    str = str.replace(new RegExp(from.charAt(i), "g"), to.charAt(i));
  }

  // Remove invalid chars
  str = str
    .replace(/[^a-z0-9 -]/g, "")
    // Collapse whitespace and replace by -
    .replace(/\s+/g, "-")
    // Collapse dashes
    .replace(/-+/g, "-");

  return str;
};
