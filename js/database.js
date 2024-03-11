function dataBase() {

    this.getUsers = function () {
        return this.users
    }
    this.addUser = function (user) {

        const users= []
        users.push(user)
        localStorage.users = JSON.stringify(users)
    }
    this.getUserByEmail = function (email) {
        const Users = JSON.parse(localStorage.users)
        for (let user of Users) {
            if (user.email == email)
                return user;
        }

    }
}