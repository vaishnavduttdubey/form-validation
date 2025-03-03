// Author: Vaishnav
// This script performs form validation for a registration form.

const form = document.getElementById("form"); // Get the form element
const username = document.getElementById("Username"); // Get the username input field
const email = document.getElementById("Email"); // Get the email input field
const password = document.getElementById("Passwprd"); // Get the password input field (Fixed typo in HTML)
const cPassword = document.getElementById("confirm-password"); // Get the confirm password input field
const submit = document.getElementById("btn"); // Get the submit button

// Add an event listener to the form for the 'submit' event
form.addEventListener("submit", (e) => {
    e.preventDefault(); // Prevents the form from submitting before validation
    validateInputs(); // Call the validation function
});

// Function to validate input fields
const validateInputs = () => {
    const usernameValue = username.value.trim(); // Get the trimmed value of username
    const emailValue = email.value.trim(); // Get the trimmed value of email
    const passwordValue = password.value.trim(); // Get the trimmed value of password
    const cPasswordValue = cPassword.value.trim(); // Get the trimmed value of confirm password

    // Validate Username
    if (usernameValue === "") {
        setError(username, "Username is required!"); // Show error if empty
    } else {
        setSuccess(username); // Show success if valid
    }

    // Validate Email
    if (emailValue === "") {
        setError(email, "Email is required!"); // Show error if empty
    } else if (!isValidEmail(emailValue)) {
        setError(email, "Enter a valid email address!"); // Show error if not valid format
    } else {
        setSuccess(email); // Show success if valid
    }

    // Validate Password
    if (passwordValue === "") {
        setError(password, "Password is required!"); // Show error if empty
    } else if (passwordValue.length < 6) {
        setError(password, "Password must be at least 6 characters!"); // Show error if too short
    } else {
        setSuccess(password); // Show success if valid
    }

    // Validate Confirm Password
    if (cPasswordValue === "") {
        setError(cPassword, "Confirm Password is required!"); // Show error if empty
    } else if (cPasswordValue !== passwordValue) {
        setError(cPassword, "Passwords do not match!"); // Show error if passwords don't match
    } else {
        setSuccess(cPassword); // Show success if valid
    }
};

// Function to show error message and red border
const setError = (element, message) => {
    const inputControl = element.parentElement; // Get parent div (.form-control)
    const errorDisplay = inputControl.querySelector(".error"); // Get the error message span

    errorDisplay.innerText = message; // Display error message
    element.style.borderColor = "red"; // Change border color to red
};

// Function to show success with green border
const setSuccess = (element) => {
    const inputControl = element.parentElement; // Get parent div (.form-control)
    const errorDisplay = inputControl.querySelector(".error"); // Get the error message span

    errorDisplay.innerText = ""; // Clear error message
    element.style.borderColor = "green"; // Change border color to green
};

// Function to validate email format using a regex pattern
const isValidEmail = (email) => {
    return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email); // Returns true if email format is valid
};
