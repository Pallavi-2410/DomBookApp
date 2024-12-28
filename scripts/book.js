import { baseUrl } from "./baseUrl.js";
import { navBar } from "./navbar.js";
navBar();


let availableBook = document.getElementById("avl")
let borrowedBooks = document.getElementById("borr")


availableBook.addEventListener("click", function() {
    if (isAvailable.value == true) {
        alert("Book is Available")
    } else {
        alert("Book Not Available")
    }
    loginData()

    fetch(`${baseUrl}/books/isAvailable == false`, {
        method: "GET",
        headers: {
            "content-type": "application/json"
        },
        body: JSON.stringify(bookCred)
    })
        .then(() => {
            alert("Book Added Successfully")
            bookForm.reset()
        })
        .catch((err) => {
            alert("Something wrong")
            console.log(err);
        });

})

borrowedBooks.addEventListener("click", () =>{
    prompt("Borrowing duration Maximum 10 days")
})


