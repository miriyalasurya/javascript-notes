function setUserName(username) {
    this.username = username;
}
function createUser(username, email, password) {
    setUserName.call(this, username); //call is used to hold the reference since it's gone once called on the call stack this is used to hold the reference of variables
    this.email = email;
    this.password = password;
}
const surya = new createUser("surya", "surya@hotmail.com", "123");
console.log(surya);
