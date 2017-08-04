const listitem = (data) => {
    let string = `
        <p>${data.title}  <i class="fa fa-trash-o" aria-hidden="true"></i></p>
        <p>${data.desc}</p>
        <p>${data.site}</p>
    `;
    
    return string
}

module.exports = {
    listitem: listitem
}