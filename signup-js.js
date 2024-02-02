const firstName = document.getElementById("first-name");
const lastName = document.getElementById("last-name");
const email = document.getElementById("email");
const password = document.getElementById("password");
const claimBtn = document.getElementById("claim-btn");
const fnIcon = document.getElementById("fn-icon");
const fnNotice = document.getElementById("fn-notice");
const lnIcon = document.getElementById("ln-icon");
const lnNotice = document.getElementById("ln-notice");
const emailIcon = document.getElementById("email-icon");
const emailNotice = document.getElementById("email-notice");
const pwIcon = document.getElementById("pw-icon");
const pwNotice = document.getElementById("pw-notice");

const emailRegex = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;

const validateEmail = () =>{
    if (email.value.match(emailRegex)) {
        return true;
    }
    return false;
}

const checkInputs = (e) => {
    checkFn();
    checkLn();
    checkEmail();
    checkPw();
    return
}

const checkFn = () => {
    if (firstName.value == "") {
        fnIcon.classList.remove("hidden");
        fnNotice.innerHTML = `
        <p class="notification pink"><em>First Name cannot be empty</em></p>`
    } else if (firstName.value != "") {
        fnIcon.classList.add("hidden");
        fnNotice.innerHTML = ``;
    } 
}    

const checkLn  = () => {
    if (lastName.value == ""){
        lnIcon.classList.remove("hidden");
        lnNotice.innerHTML = `
        <p class="notification pink"><em>Last Name cannot be empty</em></p>`
    } else if (lastName.value != "") {
        lnIcon.classList.add("hidden");
        lnNotice.innerHTML = ``;
    } 
}

const checkEmail = () => {
    if (!validateEmail() || email.value =="") {
        emailIcon.classList.remove("hidden");
        emailNotice.innerHTML = `
        <p class="notification pink"><em>Looks like this is not an email</em></p>`
    } else if (validateEmail) {
        emailIcon.classList.add("hidden");
        emailNotice.innerHTML = ``;
    }
}

const checkPw = () => {
    if (password.value == "") {
        pwIcon.classList.remove("hidden");
        pwNotice.innerHTML = `
        <p class="notification pink"><em>Password cannot be empty</em></p>`
    } else if (password.value != "") {
        pwIcon.classList.add("hidden");
        pwNotice.innerHTML = ``;
    }
}

claimBtn.addEventListener('click', checkInputs)