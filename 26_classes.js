//ES6
class User {
    constructor(username, email, password) {
        this.username = username;
        this.email = email;
        this.password = password;
    }
    encryptPassword() {
        return `${this.password}abc`;
    }
    changeUsername() {
        return `${this.username.toUpperCase()}`;
    }
}
const surya = new User("surya", "surya@hotmail.com", "surya");
console.log(surya.encryptPassword());
console.log(surya.changeUsername());


//BEHIND THE SCENE OF CLASS
// function User(username, email, password) {
//     this.username = username;
//     this.email = email;
//     this.password = password;
// }
// User.prototype.encryptPassword = function () {
//     return `${this.password}abc`;
// }
// User.prototype.changeUsername = function () {
//     return `${this.username.toUpperCase()}`;
// }