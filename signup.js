function validateForm() {
    var name = document.getElementById("name").value.trim();
    var phone = document.getElementById("phone").value.trim();
    var email = document.getElementById("email").value.trim();
    var password = document.getElementById("password").value;
    var confirmPassword = document.getElementById("confirmPassword").value;
    var address = document.getElementById("address").value.trim();
    var city = document.getElementById("city").value.trim();
    var zip = document.getElementById("zip").value.trim();
    var age = document.getElementById("age").value;

    if (name === "") {
        alert("Full Name is required.");
        return false;
    }

    var phonePattern = /^\d{10}$/;
    if (!phonePattern.test(phone)) {
        alert("Please enter a valid phone number (10 digits).");
        return false;
    }

    var emailPattern = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,6}$/;
    if (!emailPattern.test(email)) {
        alert("Please enter a valid email address.");
        return false;
    }

    var passwordPattern = /^(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/;
    if (!passwordPattern.test(password)) {
        alert("Password must be at least 8 characters, contain one number, one uppercase letter, and one special character.");
        return false;
    }

    if (password !== confirmPassword) {
        alert("Passwords do not match.");
        return false;
    }

    if (address === "" || city === "" || zip === "") {
        alert("Street Address, City, and ZIP Code fields cannot be empty.");
        return false;
    }

    var zipPattern = /^\d{5}(-\d{4})?$/;
    if (!zipPattern.test(zip)) {
        alert("Enter a valid ZIP code (e.g., 12345 or 12345-6789).");
        return false;
    }

    if (age < 18) {
        alert("You must be at least 18 years old to register.");
        return false;
    }

    alert("Registration Successful!");
    window.location.href = "home.html"; 
    return false;
}
