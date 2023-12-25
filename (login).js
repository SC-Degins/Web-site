const wrapper = document.querySelector('.wrapper');
const loginLink = document.querySelector('.login-link');
const registerLink = document.querySelector('.register-link');
const btnPopup = document.querySelector('.btnlogin-popup');
const iconClose = document.querySelector('.icon-close');


registerLink.addEventListener('click', ()=> {
    wrapper.classList.add('active');
});

loginLink.addEventListener('click', ()=> {
    wrapper.classList.remove('active');
});

btnPopup.addEventListener('click', ()=> {
    wrapper.classList.add('active-popup');
});

iconClose.addEventListener('click', ()=> {
    wrapper.classList.remove('active-popup');
}); 
function enterEmail() {
    var x = document.forms["myForm"]["fname"].value;
    if (x == "") {
        alert("Name must be filled out");
return false;
}
}
    
function enterPassword() {
var password = document.getElementById("pword").value;
var username = document.getElementById("fname").value;
if (password == "Suv@m4523" && username == "nfgaming4523@gmail.com") {
window.location = "Structure.html";
return true; 
}
else if (password !== "Suv@m4523" && username !== "nfgaming4523@gmail.com") {
alert("Either Username or Password is incorrect");
return false;
}
}