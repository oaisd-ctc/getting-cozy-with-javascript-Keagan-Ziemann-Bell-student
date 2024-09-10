
let submit = document.getElementById("submit");
submit.addEventListener("click", ValidateForm, false);
function ValidateForm(event) {
    let username = document.getElementById("username").value;
    let email = document.getElementById("email").value;
    let age = document.getElementById("age").value;
    let isValid = true;

    if (username.length < 3) {
        isValid = false;
        document.getElementById("usernameError").innerHTML = "Error: Username must be greater than 3 characters";
        event.preventDefault();
    }
    if (!email.includes('@') || !email.includes('.')) {
        isValid = false;
        document.getElementById("emailError").innerHTML = "Error: Email must include an '@' symbol and a period";
        event.preventDefault();
    }
    if (!(10 < age && age < 100)) {
        isValid = false;
        document.getElementById("ageError").innerHTML = "Error: Age must be within 10 and 100";
        event.preventDefault();
    }
    if (isValid == true) {
        alert("Your submission was successful")
    }
}