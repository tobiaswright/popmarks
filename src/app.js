console.log("alloo") 

let url = "http://www.blackenterprise.com/technology/new-program-molds-hbcu-students-into-tech-investors/"

fetch('http://localhost:7071/api/getPageInfo?url=' + url)
.then((response) => {
    response.json().then(function(data) {  
        console.log(data);  
    }); 
});

console.log("alloo")    