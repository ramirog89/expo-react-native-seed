export const toQueryString = params => {
  return (
    "?" +
    Object.entries(params)
      .map(
        ([key, value]) =>
          `${encodeURIComponent(key)}=${encodeURIComponent(value)}`
      )
      .join("&")
  );
};

export const nonce = Math.random()
  .toString(36)
  .replace(/[^a-z]+/g, "")
  .substr(0, 5);
