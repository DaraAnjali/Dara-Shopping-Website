document.addEventListener("DOMContentLoaded", function () {
    document.querySelector("form").addEventListener("submit", function (event) {
        event.preventDefault();
        let username = document.getElementById("username").value.trim();
        let password = document.getElementById("password").value.trim();
        if (username === "" || password === "") {
            alert("Please fill in both fields.");
            return false;
        }
        if (username === "admin" && password === "password123") {
            alert("Login Successful!");
            window.location.href = "home.html";
        } else {
            alert("Invalid credentials. Try again.");
        }
    });
});
