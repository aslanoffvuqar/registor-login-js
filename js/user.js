function User() {
    this.name;
    this.username;
    this.email;
    this.password;
    this.getFullInfo = function () {
        return this.name + " " + this.surname + " " + this.email + " " + this.password;
    }
}