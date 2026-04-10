document.getElementById("myForm").addEventListener("submit", function(event) {

    event.preventDefault();  // Stop form from submitting

    let name = document.getElementById("name").value;
    let email = document.getElementById("email").value;
    let password = document.getElementById("password").value;

    let errorMessage = "";

    // Name validation
    if (name === "") {
        errorMessage += "Name is required\n";
    }

    // Email validation
    if (!email.includes("@")) {
        errorMessage += "Enter valid email\n";
    }

    // Password validation
    if (password.length < 6) {
        errorMessage += "Password must be at least 6 characters\n";
    }

    let msg = document.getElementById("message");

    if (errorMessage !== "") {
        msg.innerHTML = errorMessage.replace(/\n/g, "<br>");
        msg.className = "error";
    } else {
        msg.innerText = "Form submitted successfully!";
        msg.className = "success";
    }

});