'use strict'

function onLogin() {
    var elUser = document.querySelector('.username');
    var elPassword = document.querySelector('.password');
    var currUser = doLogin(elUser.value, elPassword.value);
    if (!currUser) {
        alert('Username or password incorrect.');
        return;
    }
    elUser.value = '';
    elPassword.value = '';
    // hide login
    document.querySelector('.login').hidden = true;
    // show logedin
    var ellogedin = document.querySelector('.logedin')
    ellogedin.hidden = false;
    ellogedin.querySelector('span').innerText = currUser.username;
    // show secret 
    document.querySelector('.secret').hidden = false;
    // show admin link
    if (currUser.isAdmin) document.querySelector('.admin').hidden = false;
}

function doLogout() {
    removeFromStorage('LogedinUser');
    // show login
    document.querySelector('.login').hidden = false;
    // hide logedin
    document.querySelector('.logedin').hidden = true;
    // hide secret 
    document.querySelector('.secret').hidden = true;
    // hide admin link
    document.querySelector('.admin').hidden = true;
}

