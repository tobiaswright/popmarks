const templ = require("./templates");

let bookmarks = [];
const formurl = document.getElementById("formurl");
const pageInfoFunc = 'http://localhost:7071/api/getPageInfo?url=';


let retrieveInput = () => {
    let formVal = formurl.value;
    formurl.value = "";
    return formVal;
}

let parseData = (siteData) => {
    let obj = {
        title: siteData.data.ogTitle,
        desc: siteData.data.ogDescription,
        site: siteData.data.ogSiteName
    }

    bookmarks.unshift(obj);

    return Promise.resolve(obj)
}

let insertData = (data) => {
    let newItem = document.createElement("li");       // Create a <li> node
    newItem.innerHTML = templ.listitem(data);

    let ulList = document.getElementById("main");    // Get the <ul> element to insert a new node
    ulList.insertBefore(newItem, ulList.childNodes[0]);  // Insert <li> before the first child of <ul>
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

module.exports = {
    returnURLInfo: returnURLInfo
}