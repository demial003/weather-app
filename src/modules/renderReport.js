import { getImg } from "./getImg";
import { getDate } from "./getDate";
const renderReport = (info) => {
  const container = document.getElementById("container");

  const report = document.createElement("div");
  report.id = "reportDiv";
  container.appendChild(report);

  const locationInfo = document.createElement("div");
  locationInfo.id = "locationInfo";
  report.appendChild(locationInfo);
  const name = document.createElement("div");
  name.className = "cityNameDiv";
  name.textContent = info.location.toUpperCase();
  locationInfo.appendChild(name);

  const btn = document.createElement("button");
  btn.id = "convertUnit";
  if (info.unit === "F") {
    btn.textContent = "convert to C";
  } else {
    btn.textContent = "convert to F";
  }
  locationInfo.appendChild(btn);

  const casts = document.createElement("div");
  casts.id = "castsWrapper";
  report.appendChild(casts);

  info.forecasts.forEach((e) => {
    const daily = document.createElement("div");
    daily.className = "daily";
    casts.appendChild(daily);

    const date = document.createElement("div");
    date.className = "dateDiv";
    date.textContent = getDate(e.date);
    daily.appendChild(date);

    const temp = document.createElement("div");
    temp.className = "tempDiv";
    temp.textContent = e.temp + " " + info.unit;
    daily.appendChild(temp);

    const humidity = document.createElement("div");
    humidity.className = "humidityDiv";
    humidity.textContent = "humidity: " + e.humidity;
    daily.appendChild(humidity);

    const conditions = document.createElement("div");
    conditions.className = "conditionsDiv";
    conditions.textContent = e.conditions;
    daily.appendChild(conditions);

    const icon = document.createElement("div");
    icon.className = "iconDiv";
    daily.appendChild(icon);

    const iconImg = document.createElement("img");
    iconImg.src = getImg(e.icon);
    iconImg.alt = e.icon;
    icon.appendChild(iconImg);
  });

  const inp = document.getElementById("nameInput");
  inp.value = "";
};

export { renderReport };
