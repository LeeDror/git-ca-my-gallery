var gUsers = _createUsers();

function getUsersForDisplay() {
    return gUsers;
}

function _createUsers() {
    var users = loadFromStorage('users')
    if (!users || !users.length) {
        var names = ['Lee', 'Shir', 'Adi'];
        users = names.map(function (name) { return _createUser(name) });
        saveToStorage('users', users)
    }
    return users;
}

function _createUser(name) {
    return {
        username: name,
        password: '1234',
        lastLoginTime: Date.now(),
        isAdmin: false
    }
}

function doLogin(userName, password) {
    var currUser = gUsers.find(function (user) {
        return (userName === user.username &&
            password === user.password)
    })
    if (currUser) {
        currUser.lastLoginTime = Date.now();
        saveToStorage('LogedinUser', currUser);
    }
    return currUser;
}
