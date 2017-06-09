const submit =  document.getElementById("submit");
const formurl = document.getElementById("formurl");
const pageInfoFunc = 'http://localhost:7071/api/getPageInfo?url=';
let bookmarks = [];

let retrieveInput = () => {
    let formVal = formurl.value;
    formurl.value = "";
    return formVal;
}

const string = (data) => {
    let string = `
        <p>${data.title}  <i class="fa fa-trash-o" aria-hidden="true"></i></p>
        <p>${data.desc}</p>
        <p>${data.site}</p>
    `;
    
    return string
}

let parseData = (data) => {
    let obj = {
        title: data.data.ogTitle,
        desc: data.data.ogDescription,
        site:data.data.ogSiteName
    }

    bookmarks.unshift(obj);

    return Promise.resolve(obj)
}

let insertData = (data) => {
    let newItem = document.createElement("li");       // Create a <li> node
    newItem.innerHTML = string(data);

    let list = document.getElementById("main");    // Get the <ul> element to insert a new node
    list.insertBefore(newItem, list.childNodes[0]);  // Insert <li> before the first child of <ul>
}

let returnURLInfo = (e) => {
    e.preventDefault();

    let url = retrieveInput();

    fetch(pageInfoFunc + url)
    .then((response) => {
        response.json()
        .then(parseData)
        .then(insertData); 
    });
}

submit.addEventListener("click", returnURLInfo, false);