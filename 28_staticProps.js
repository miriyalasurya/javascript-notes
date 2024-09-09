class User {
    constructor(username) {
        this.username = username;
    }
    logMe() {
        console.log(`username is ${this.username}`);
    }
    static createId() { //anonymous
        return `123`;
    }
}
const surya = new User("surya");
// console.log(surya.createId()); //error since createID is static

class Teacher extends User {
    constructor(username, email) {
        super(username)
        this.email = email;
    }
}
const iphone = new Teacher("iphone", "iphone@gmail.com")
// console.log(iphone.createId()); //STILL WONT WORk

