const submit =  document.getElementById("submit");
const formurl = document.getElementById("formurl");

let retrieveInput = () => {
    let formVal = formurl.value;
    formurl.value = "";
    return formVal;
}

let returnURLInfo = (e) => {
    e.preventDefault();

    let url = retrieveInput();

    fetch('http://localhost:7071/api/getPageInfo?url=' + url)
    .then((response) => {
        response.json().then(function(data) {  
            console.log(data);  
        }); 
    });
}

submit.addEventListener("click", returnURLInfo, false);

