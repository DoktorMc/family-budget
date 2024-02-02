export const setProperty = (obj, path, value) => {
  const [head, ...rest] = path.split(".");
  console.log('head - ', head);
  console.log('rest', rest);
  return {
    ...obj,
    [head]: rest.length ? setProperty(obj[head], rest.join("."), value) : value,
  };
};
