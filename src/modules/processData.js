const processData = ({ address: location, days }) => {
  let weatherReport = {
    location,
    unit: "F",
    forecasts: [],
  };

  // let days = response.days;
  days.forEach(({ temp, humidity, datetime: date, conditions, icon }) => {
    // report.temp =
    // report.humidity = ;
    // report.date = datetime;
    // report.conditions = conditions;
    // report.icon = icon;

    weatherReport.forecasts.push({
      temp,
      humidity,
      date,
      conditions,
      icon,
    });
  });

  return weatherReport;
};

export { processData };
