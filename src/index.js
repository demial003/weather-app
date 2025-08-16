import { createForm } from "./form";
import { getData } from "./getData";
import { processData } from "./processData";
import { convertTemp } from "./convertTemp";
import { renderReport } from "./renderReport";

// getData("london").then((response) => {
//   let x = processData(response);
//   console.log(response);
//   console.log(x);
//   renderReport(x);
// });

createForm();
let report = {};
const form = document.getElementById("weatherForm");
form.addEventListener("submit", (event) => {
  event.preventDefault();
  const city = document.getElementById("nameInput").value;
  getData(city).then((response) => {
    report = processData(response);
    renderReport(report);
    console.log(report);
    form.remove();
  });
});

document.addEventListener("click", (e) => {
  if (e.target.id === "convertUnit") {
    convertTemp(report);
    document.getElementById("reportDiv").remove();
    renderReport(report);
  }
});
