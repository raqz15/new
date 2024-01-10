console.log("good morning India");

let emailInput;
let passwordInput;

document.getElementById("signInBtn").onclick = function() {
    console.log("Sign In button pressed");

    // Get values from input fields
    emailInput = document.getElementById("emailInput").value;
    passwordInput = document.getElementById("passwordInput").value;

    // Log entered data to the console
    console.log("Email:", emailInput);
    console.log("Password:", passwordInput);

    // You can perform further processing here, like sending data to a server

    // Reset the input fields (optional)
    document.getElementById("emailInput").value = "";
    document.getElementById("passwordInput").value = "";
};
