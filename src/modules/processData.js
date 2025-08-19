const processData = (response) => {
  let weatherReport = {
    forecasts: [],
  };

  let days = response.days;
  days.forEach((day) => {
    let report = {};
    report.temp = Math.round(day.temp);
    report.humidity = Math.round(day.humidity);
    report.date = day.datetime;
    report.conditions = day.conditions;
    report.icon = day.icon;

    weatherReport.forecasts.push(report);
  });

  weatherReport.location = response.address;
  weatherReport.longitude = Math.round(response.longitude);
  weatherReport.latitude = Math.round(response.latitude);
  weatherReport.unit = "F";
  return weatherReport;
};

export { processData };
