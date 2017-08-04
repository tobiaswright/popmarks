const pageData = require("./scripts/getpagedata");

const submit =  document.getElementById("submit");

submit.addEventListener("click", pageData.returnURLInfo, false);