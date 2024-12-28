import { baseUrl } from "./baseUrl.js";
import { navBar } from "./navbar.js";
navBar();

function loginData() {
    fetch(`${baseUrl}/books`)
        .then((res) => res.json())
        .then((data) => { displayBooks(data) })
        .catch((err) => {
            alert("Something wrong")
            console.log(err)
        })
}
loginData()
// let data = JSON.parse(localStorage.getItem(books) || []);
// localStorage.setItem("books", JSON.stringify(books))

let form = document.getElementById("bookForm")
form.addEventListener("submit" , () => {
event.preventDefault();
let title = bookForm.bookTitle.value
let author = bookForm.bookAuthor.value
let select = bookForm.SelectCat.value
let category = bookForm.category.value
let fiction = bookForm.fiction.value
let comedy = bookForm.comedy.value
let technical = bookForm.technical.value
let submitAdd = bookForm.submitAdd.value
// let status = bookForm.status.value
let bookCred = {
    title,
    author,
    select,
    fiction,
    comedy,
    technical,
    submitAdd,
    status: true
}

fetch(`${baseUrl}/books`, {
    method: "POST",
    headers: {
        "content-type":"application/json"
    },
    body: JSON.stringify(bookCred)
})
.then(()=> {
    alert("Book Added Successfully")
    bookForm.reset()
})
    .catch((err) => {
            alert("Something wrong")
            console.log(err);
    });
})


function displayBooks(arr){
    let cont = document.getElementById("cont");
    cont.innerHTML = "";
    arr.map((el,i) =>{
        let card = document.createElement("div")
        card.className = "card"
        let title = document.createElement("h3")
        title.textContent = `Title: ${el.title}`
        
        let author = document.createElement("h3")
        author.textContent = `Author: ${el.author}`

        let select = document.createElement("h3")
        select.textContent = `Select: ${el.select}`

        let fiction = document.createElement("h3")
        fiction.textContent = `Fiction: ${el.fiction}`

        let comedy = document.createElement("h3")
        comedy.textContent = `Comedy: ${el.comedy}`

        let technical = document.createElement("h3")
        technical.textContent = `Technical : ${el.technical}`  

        let verifyBtn = document.createElement("button")
        verifyBtn.textContent = "Verify Book"

        let deleteBtn = document.createElement("button")
        deleteBtn.textContent = "Delete Book"

        let status = document.createElement("h4")
        status.textContent = `Availability Status: ${status.value}`

        //Availability Status
        if(isAvailable.value == true){
            alert("Book is Available")    
        }else{
            alert("Book Not Available")
        }
        
        card.appendChild(title, author, fiction, comedy, technical, status);
        cont.appendChild(card)
    })    
}

verifyBtn.addEventListener("click", () => {
    prompt("Are you sure to Verify..?")
    if(isVerified.value == false){
        alert("Book is not verified")
    }
})

deleteBtn.addEventListener("click", function() {
    fetch(`${baseUrl}/books`, {
        method: "DELETE"
})
.then(() => {
    alert("Are you sure you want to Delete")
})
.catch((err) =>{
    alert("Something is wrong")
    console.log(err)
})
})