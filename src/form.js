import { getWeather, processData, convertTemp } from "./index.js";

const createForm = () => {
  const container = document.getElementById("container");

  const formDiv = document.createElement("div");
  formDiv.id = "formDiv";
  container.appendChild(formDiv);

  const form = document.createElement("form");
  form.id = "weatherForm";
  formDiv.appendChild(form);

  const name = document.createElement("input");
  name.type = "text";
  name.id = "nameInput";
  const nameLabel = document.createElement("label");
  nameLabel.setAttribute("for", "nameInput");
  nameLabel.textContent = "enter city name";
  form.appendChild(nameLabel);
  form.appendChild(name);

  const submit = document.createElement("input");
  submit.id = "submit";
  submit.type = "submit";
  form.appendChild(submit);
};

export { createForm };
