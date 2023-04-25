const signupForm = document.querySelector(".signup-area-form")
const emailInput = document.querySelector(".email-input")
const signupFormWrapper = document.querySelector(".signup-area-form-wrapper")

function validateEmail(input) {

    const valid = String(input)
        .toLowerCase()
        .match(
            /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|.(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
        )

    if (valid) {

        alert("Valid email address!");

        emailInput.focus();
        signupFormWrapper.classList.remove("show-alert")
        emailInput.value = ""
        return true;

    } else {

        alert("Invalid email address!");
        signupFormWrapper.classList.add("show-alert")
        emailInput.focus();

        return false;

    }

}

signupForm.addEventListener("submit", (e) =>{
    e.preventDefault();
    validateEmail(emailInput.value)
})

