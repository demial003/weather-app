import { getImg } from "./getImg";
import { getDate } from "./getDate";
const renderReport = ({ location, forecasts, unit }) => {
  const container = document.getElementById("container");

  const report = document.createElement("div");
  report.id = "reportDiv";
  container.appendChild(report);

  const locationInfo = document.createElement("div");
  locationInfo.id = "locationInfo";
  report.appendChild(locationInfo);
  const name = document.createElement("h3");
  name.className = "cityNameDiv";
  name.textContent = location.toUpperCase();
  locationInfo.appendChild(name);

  const btn = document.createElement("button");
  btn.id = "convertUnit";
  if (unit === "F") {
    btn.textContent = "convert to C";
  } else {
    btn.textContent = "convert to F";
  }
  locationInfo.appendChild(btn);

  const casts = document.createElement("div");
  casts.id = "castsWrapper";
  report.appendChild(casts);

  forecasts.forEach(({ temp, date, humidity, conditions, icon }) => {
    const daily = document.createElement("div");
    daily.className = "daily";
    casts.appendChild(daily);

    const dateEl = document.createElement("p");
    dateEl.className = "dateDiv";
    dateEl.textContent = getDate(date);
    daily.appendChild(dateEl);

    const tempEl = document.createElement("p");
    tempEl.className = "tempDiv";
    tempEl.textContent = temp + " " + unit;
    daily.appendChild(tempEl);

    const humidityEl = document.createElement("p");
    humidityEl.className = "humidityDiv";
    humidityEl.textContent = "humidity: " + humidity;
    daily.appendChild(humidityEl);

    const conditionsEl = document.createElement("p");
    conditionsEl.className = "conditionsDiv";
    conditionsEl.textContent = conditions;
    daily.appendChild(conditionsEl);

    const iconDiv = document.createElement("div");
    iconDiv.className = "iconDiv";
    daily.appendChild(iconDiv);

    const iconImg = document.createElement("img");
    iconImg.src = getImg(icon);
    iconImg.alt = icon;
    iconDiv.appendChild(iconImg);
  });

  const inp = document.getElementById("nameInput");
  inp.value = "";
};

export { renderReport };
