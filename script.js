function validateForm() {

    let name = document.getElementById("name").value.trim();
    let email = document.getElementById("email").value.trim();
    let mobile = document.getElementById("mobile").value.trim();
    let eventName = document.getElementById("event").value.trim();
    let error = "";

    // Name validation
    if (name === "") {
        error = "Name cannot be empty";
    }
    // Email validation
    else if (!email.match(/^[a-zA-Z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,}$/)) {
        error = "Enter a valid Email";
    }
    // Mobile validation
    else if (!mobile.match(/^[0-9]{10}$/)) {
        error = "Mobile number must be 10 digits";
    }
    // Event name validation
    else if (eventName === "") {
        error = "Event Name cannot be empty";
    }

    // Show error
    if (error !== "") {
        document.getElementById("errorMsg").innerText = error;
        return false;
    }

    alert("Registration Successful!");
    return true;
}
