import { createForm } from "./form";
import { getData } from "./getData";
import { processData } from "./processData";
import { convertTemp } from "./convertTemp";
import { renderReport } from "./renderReport";

createForm();
let report = {};
const form = document.getElementById("weatherForm");
form.addEventListener("submit", (event) => {
  event.preventDefault();

  const repDiv = document.getElementById("reportDiv");
  console.log(repDiv);
  if (repDiv) {
    repDiv.remove();
  }

  const city = document.getElementById("nameInput").value;
  getData(city).then((response) => {
    report = processData(response);
    renderReport(report);
    console.log(report);
  });

  const inp = document.getElementById("nameInput");
  inp.value = "";
});

document.addEventListener("click", (e) => {
  if (e.target.id === "convertUnit") {
    convertTemp(report);
    document.getElementById("reportDiv").remove();
    renderReport(report);
  }
});
