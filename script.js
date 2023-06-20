window.onload = function () {
    var form = document.getElementById("contactForm"); // Get the contact form element

    if (form) {
        form.onsubmit = function (e) { // Event handler for form submission
            e.preventDefault(); // Prevent the form from submitting and reloading the page

            var inputFields = ["fname", "lname", "email"]; // Array of input field IDs
            var regex = /\S+@\S+\.\S+/; // Basic regex for email validation
            var allFieldsFilled = true; // Flag to check if all fields are filled
            var emailValid = true; // Flag to check if the email field is valid

            for (var i = 0; i < inputFields.length; i++) {
                var inputValue = document.getElementById(inputFields[i]).value; // Get the value of each input field

                if (inputValue === "") { // Check if the field is empty
                    allFieldsFilled = false; // Set the flag to false
                }

                if (inputFields[i] === "email" && !regex.test(inputValue)) { // Check if the field is the email field and the value does not match the email regex pattern
                    emailValid = false; // Set the flag to false
                }
            }

            if (!allFieldsFilled) { // Check if any field is empty
                alert("All fields are required"); // Display an alert message
            } else if (!emailValid) { // Check if the email field is not valid
                alert("Please provide a valid email address"); // Display an alert message
            } else {
                alert("Form submitted successfully"); // Display an alert message
            }
        }
    }
}
