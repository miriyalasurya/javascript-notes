/*
Javascript is a prototype based language. Classes are nothing but syntactic sugar
we do hav classes but behind the scene working is prototype
*/

/*
PARTS OF OOP
-Object Literal
-constructor Function
-Classes
-Instances (New, This)
 */

//Object Literal
const user = {
    username: "Surya",
    age: "22",
    isLoggedIn: true,
    getUserDetails: function () {
        console.log(`Username: ${this.username}`);
    }
}
user.getUserDetails(); //call it nor reference

function User(username, loginCount, isLoggedIn) {
    this.username = username;
    this.loginCount = loginCount;
    this.isLoggedIn = isLoggedIn
    return this;
}
const userOne = new User("surya", 10, true);
// const userTwo = User("nigga", 69, false); //this will replace everything in the old instace so use new
const userTwo = new User("nigga", 69, false);
console.log(userOne);



