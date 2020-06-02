'use strict'


function onLoad() {
    var isAdmin = checkUserAdmin();
    if (isAdmin) {
        // show table 
        document.querySelector('.list-users').hidden = false;
        renderUsers();
    }
}

function renderUsers() {
    var users = loadFromStorage('users');
    var elUsersList = document.querySelector('.user-list-body');
    var strHTMLs = users.map(function (user) {
        return `<tr><td>${user.username}</td>
        <td>${user.password}</td>
        <td>${formatTime(user.lastLoginTime)}</td>
        <td>${user.isAdmin}</td></tr>`
    })
    console.log(strHTMLs);
    elUsersList.innerHTML = strHTMLs.join('');;
}

function formatTime(timestamp) {
    return new Date(timestamp).toLocaleString();
}
