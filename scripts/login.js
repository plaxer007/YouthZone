"use strict";
// Login validation



// Register validation
const inputLogin = document.getElementById('reg-login');
const inputPsw = document.getElementById('reg-password');
let invalid = document.querySelector('.invalid');

function isValidLogin() {
  validationStyles();
  // Check for login length
  if(inputLogin.value == ''){
    invalid.textContent = 'Login cannot be empty! Try again';
    
  } else if(inputLogin.value.length < 6){
    invalid.textContent = `Login should be at least 6 characters. Now it's: ${inputLogin.value.length}`;
  } 
  else {
    invalid.textContent = '';
    invalid.style.padding = '0';
  }
}
function isValidPassword() {
  validationStyles()
  if(inputPsw.value == ''){
    invalid.textContent = 'Password cannot be empty! Try again';
  } else if(inputPsw.value.length < 6){
    invalid.textContent = `Password should be at least 6 characters. Now it's: ${inputPsw.value.length}`;
  } 
  else {
    invalid.textContent = '';
    invalid.style.padding = '0';
  }
}
function validationStyles(){
  if(isValidLogin || isValidPassword){
    invalid.style.fontSize = '12px';
    invalid.style.maxWidth = '200px';
    invalid.style.padding = '12px 24px';
  }
}
inputLogin.addEventListener('blur', isValidLogin);
inputPsw.addEventListener('blur', isValidPassword);

