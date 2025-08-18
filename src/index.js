import { createForm } from "./modules/form.js";
import { getData } from "./modules/getData.js";
import { processData } from "./modules/processData.js";
import { convertTemp } from "./modules/convertTemp.js";
import { renderReport } from "./modules/renderReport.js";
import "./styles/styles.css";

createForm();
let report = {};
const form = document.getElementById("weatherForm");
form.addEventListener("submit", (event) => {
  event.preventDefault();

  const repDiv = document.getElementById("reportDiv");
  if (repDiv) {
    repDiv.remove();
  }
  const city = document.getElementById("nameInput").value;
  getData(city)
    .then((response) => {
      report = processData(response);
      renderReport(report);
      console.log(report);
    })
    .catch((error) => {
      alert(error);
    });
});

document.addEventListener("click", (e) => {
  if (e.target.id === "convertUnit") {
    convertTemp(report);
    document.getElementById("reportDiv").remove();
    renderReport(report);
  }
});
