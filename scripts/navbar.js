export function navBar() {
    let navBar= document.createElement("div")
    navBar.innerHTML= `
    <a href="./index.html">Home</a>
    <a href="./admin.html">Admin</a>
    <a href="./books.html">Books</a>
    `
    document.body.prepend(navBar);
}