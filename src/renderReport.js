const renderReport = (info) => {
  const container = document.getElementById("container");

  const report = document.createElement("div");
  report.id = "reportDiv";
  container.appendChild(report);

  const name = document.createElement("div");
  name.className = "cityNameDiv";
  name.textContent = info.location;
  report.appendChild(name);
  const coords = document.createElement("div");
  coords.className = "coordsDiv";
  coords.textContent = "coordinates: " + info.longitude + ", " + info.latitude;
  report.appendChild(coords);

  const casts = document.createElement("div");
  casts.id = "castsWrapper";
  report.appendChild(casts);

  info.forecasts.forEach((e) => {
    const date = document.createElement("div");
    date.className = "dateDiv";
    date.textContent = e.date;
    casts.appendChild(date);

    const temp = document.createElement("div");
    temp.className = "tempDiv";
    temp.textContent = e.temp + " " + info.unit;
    casts.appendChild(temp);

    const humidity = document.createElement("div");
    humidity.className = "humidityDiv";
    humidity.textContent = "humidity: " + e.humidity;
    casts.appendChild(humidity);

    const conditions = document.createElement("div");
    conditions.className = "conditionsDiv";
    conditions.textContent = e.conditions;
    casts.appendChild(conditions);
  });

  const inp = document.getElementById("nameInput");
  inp.value = "";

  const btn = document.createElement("button");
  btn.id = "convertUnit";
  if (info.unit === "F") {
    btn.textContent = "convert to C";
  } else {
    btn.textContent = "convert to F";
  }
  report.appendChild(btn);
};

export { renderReport };
