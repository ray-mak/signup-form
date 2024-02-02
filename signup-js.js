const firstName = document.getElementById("first-name");
const lastName = document.getElementById("last-name");
const email = document.getElementById("email");
const password = document.getElementById("password");
const claimBtn = document.getElementById("claim-btn");

const emailRegex = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;

const validateEmail = () =>{
    if (email.value.match(emailRegex)) {
        return true;
    }
    return false;
}

const checkInputs = () => {
    firstName.value.trim() === "" ? firstName.parentElement.classList.add("error") : firstName.parentElement.classList.remove("error");
    lastName.value.trim() === "" ? lastName.parentElement.classList.add("error") : lastName.parentElement.classList.remove("error");
    password.value.trim() === "" ? password.parentElement.classList.add("error") : password.parentElement.classList.remove("error");
    if (!validateEmail() || email.value.trim() === "") {
        email.parentElement.classList.add("error")
    } else if (validateEmail()) {
        email.parentElement.classList.remove("error")
    }
}


claimBtn.addEventListener('click', checkInputs)