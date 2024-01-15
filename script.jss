// script.js

document.addEventListener("DOMContentLoaded", function () {
    // Get references to elements
    let nameField = document.getElementById("nameField");
    let title = document.getElementById("title");
    let signupBtn = document.getElementById("signupBtn");
    let signinBtn = document.getElementById("signinBtn");

    // Initial setup
    nameField.style.maxHeight = "100px";
    title.innerText = "Sign Up";
    signupBtn.classList.add("disable");
    signinBtn.classList.remove("disable");

    // Toggle form function
    function toggleForm(formType) {
        if (formType === 'signup') {
            nameField.style.maxHeight = "100px";
            title.innerText = "Sign Up";
            signupBtn.classList.add("disable");
            signinBtn.classList.remove("disable");
        } else if (formType === 'signin') {
            nameField.style.maxHeight = "0";
            title.innerText = "Sign In";
            signupBtn.classList.remove("disable");
            signinBtn.classList.add("disable");
        }
    }

    // Event listeners for buttons
    signupBtn.addEventListener("click", function () {
        toggleForm('signup');
    });

    signinBtn.addEventListener("click", function () {
        toggleForm('signin');
    });
});



document.addEventListener('DOMContentLoaded', function() {
    // Function to handle click event on the login link
    function handleLoginLinkClick(event) {
        alert('You clicked the signin/Signup link!'); // Customize this message or add your desired functionality
    }

    // Add a click event listener to the login link
    var loginLink = document.querySelector('a[href="intern.html"]');
    if (loginLink) {
        loginLink.addEventListener('click', handleLoginLinkClick);
    }
});