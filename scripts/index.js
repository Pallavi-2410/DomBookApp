import { navBar } from "./navbar.js";
navBar();

let form = document.getElementById("form");
form.addEventListener("click", () => {
    event.preventDefault()
        let email = form.email.value;
        let password = form.password.value;

        // for Login
    if (email == `admin@empher.com` && password == `empher@123`){
        alert("Logged in as Admin")
        window.location.href = "admin.html"
    } else if (email == `user@empher.com` && password == `user@123`){
        alert("User LogIn Successfull")
    }else{
        alert("Login Unsuccessful")
    }
});


