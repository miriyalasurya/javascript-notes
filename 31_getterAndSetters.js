class User {
    constructor(username, password) {
        this.username = username;
        this.password = password;
    }
    get password() { //if getter is defined SETTER MUST BE DEFINED TOO
        return this._password.toUpperCase();
    }
    set password(value) {
        this._password = value.toUpperCase(); //this and Constructor race with each other while setting values
    }
}
const surya = new User("surya", "abc");
console.log(surya.password);

//SAME AS ABOVE BUT FOR FUNCTION USING PROPERTY
// function User(email, password) {
//     this._email = email;
//     this._password = password;
//     Object.defineProperty(this, 'email', {
//         get: function () {
//             return this._email.toUpperCase()
//         },
//         set: function (value) {
//             this._email = value;
//         }
//     })
//     Object.defineProperty(this, 'password', {
//         get: function () {
//             return this._password.toUpperCase()
//         },
//         set: function (value) {
//             this._password = value;
//         }
//     })
// }

// SAME AS ABOVE FOR OBJECTS
// const User = {
//     _email: 'surya@hotmail.com',
//     _password: 'abc',

//     get email() {
//         return this._email.toUpperCase()
//     },
//     set email(value) {
//         this._email = value;
//     }
// }

