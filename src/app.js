const submit =  document.getElementById("submit");
const formurl = document.getElementById("formurl");

let retrieveInput = () => {
    let formVal = formurl.value;
    formurl.value = "";
    return formVal;
}

let insertData = (data) => {
    console.log(data);
    let newItem = document.createElement("li");       // Create a <li> node
    let textnode = document.createTextNode(data.data.                ogTitle);  // Create a text node
    newItem.appendChild(textnode);                    // Append the text to <li>

    let list = document.getElementById("main");    // Get the <ul> element to insert a new node
    list.insertBefore(newItem, list.childNodes[0]);  // Insert <li> before the first child of <ul>
}

let returnURLInfo = (e) => {
    e.preventDefault();

    let url = retrieveInput();

    fetch('http://localhost:7071/api/getPageInfo?url=' + url)
    .then((response) => {
        response.json().then(insertData); 
    });
}

submit.addEventListener("click", returnURLInfo, false);