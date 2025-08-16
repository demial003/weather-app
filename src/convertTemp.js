const convertTemp = (report) => {
  let arr = report.forecasts;
  console.log(arr);
  if (report.unit === "F") {
    arr.forEach((e) => {
      e.temp = Math.round(((e.temp - 32) * 5) / 9);
    });
    report.unit = "C";
  } else {
    arr.forEach((e) => {
      e.temp = Math.round((e.temp * 9) / 5 + 32);
    });

    report.unit = "F";
  }
};
export { convertTemp };
