'use strict'

function checkUserAdmin() {
        var currUser = loadFromStorage('LogedinUser');
        if (!currUser || !currUser.isAdmin) {
                window.location.href = 'index.html';
        }
        else return true;
}
