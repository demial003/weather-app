const getDate = (date) => {
  let d = new Date(date);
  let res = d.toDateString();
  let len = res.length;
  return res.substring(0, len - 4);
};

export { getDate };
