console.log("hello world");

let btnRegister = document.querySelector("#btnReg");

function registerUser(){
    let registerEmail = document.querySelector("#regEmail");
    let registerName = document.querySelector("#regName");
    let registerPassword = document.querySelector("#regPassword");
    let registerConfirmPassword = document.querySelector("#regConPassword");
    let registerNot = document.querySelector("#radioNot");
    let registerMale = document.querySelector("#radioMale");
    let registerFemale = document.querySelector("#radioFemale");
    let registerAddress = document.querySelector("#regAddress");
    let registerBirthdate = document.querySelector("#regBirthdate");

    let regYearSelect = document.querySelector("#regYear");
    //if (regYearSelect.selectedIndex === 0) {
        //return alert("Year Level is required.");
    //}
    let selectedYear = regYearSelect.options[regYearSelect.selectedIndex].text; 

    let users = {
        name: registerName.value,
        email: registerEmail.value,
        password: registerPassword.value,
        confirmPassword: registerConfirmPassword.value,
        gender: registerNot.checked ? "Rather not say" : registerMale.checked ? "Male" : registerFemale.checked ? "Female" : "",
        yearLevel: selectedYear,
        address: registerAddress.value,
        birthdate: registerBirthdate.value,
    };

    if(!users.name){
        return alert("Name is required.")
    } else if (!users.email){
        return alert("Email is required.")
    } else if (!users.password){
        return alert("Password is required.")
    } else if (!users.confirmPassword) {
        return alert("Confirm Password is required.")
    } else if (users.password != users.confirmPassword){
        return alert("Password does not match.")
    } else if (!users.gender){
        return alert("Gender is required.")
    } else if (regYearSelect.selectedIndex === 0){
        return alert("Year Level is required.")
    } else if (!users.address){
        return alert("Address is required.")
    } else if (!users.birthdate){
        return alert("Birthdate is required.")
    }

    localStorage.setItem("user", JSON.stringify(users));

    console.log("Successfully Registered!", users);
}
 

btnRegister.addEventListener("click", () => {
    registerUser();
});