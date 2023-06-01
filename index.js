const uiBtnToRegister = document.getElementById('to-register');
const uiBtnLogin = document.getElementById('to-login');
const uiFormLogin = document.getElementsByClassName('form-login')[0];
const uiFormRegister = document.getElementsByClassName('form-register')[0];

function switchToRegisterPage() {
    console.log('Switching to register page');
    uiFormLogin.style.display = 'none';
    uiFormRegister.style.display = 'block';
}

function switchToLoginPage() {
    console.log('Switching to login page');
    uiFormRegister.style.display = 'none';
    uiFormLogin.style.display = 'block';
}

uiBtnToRegister.addEventListener('click', switchToRegisterPage);
uiBtnLogin.addEventListener('click', switchToLoginPage);
