import { createForm } from "./form";
const getWeather = async (city) => {
  try {
    let data = await fetch(
      `https://weather.visualcrossing.com/VisualCrossingWebServices/rest/services/timeline/${city}?unitGroup=us&key=JCQRUCGLXGNAJDCDRETXM9VTD&contentType=json`,
      {
        mode: "cors",
      }
    );

    let response = await data.json();
    return response;
  } catch (error) {
    console.log("error ", error);
  }
};

const processData = (response) => {
  let location = response.address;
  let weatherReport = {};
  weatherReport.location = location;
  weatherReport.temp = response.currentConditions.temp;
  weatherReport.humidity = response.currentConditions.humidity;
  weatherReport.longitude = response.longitude;
  weatherReport.latitude = response.latitude;
  weatherReport.unit = "F";
  return weatherReport;
};

const convertTemp = (report) => {
  let temp = report.temp;
  if (report.unit === "F") {
    temp = Math.round(((temp - 32) * 5) / 9);
    report.temp = temp;
    report.unit = "C";
  } else {
    temp = Math.round((temp * 9) / 5 + 32);
  }
};

createForm();

const form = document.getElementById("weatherForm");
form.addEventListener("submit", (event) => {
  event.preventDefault();
  const city = document.getElementById("nameInput").value;
  let london = {};
  getWeather(city).then((response) => {
    london = processData(response);
    console.log(london);
  });
});

// export { getWeather, processData, convertTemp };
