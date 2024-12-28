import { navBar } from "./navbar.js";
navBar();

function loginData() {
    fetch(`${baseUrl}/books`)
        .then((res) => res.json())
        .then((data) => { loginData(data) })
        .catch((err) => {
            alert("Something wrong")
            console.log(err)
        })
}

function displayData({
    
})