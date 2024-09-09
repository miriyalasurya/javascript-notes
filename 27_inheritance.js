class User {
    constructor(username) {
        this.username = username;
    }
    logMe() {
        console.log(`USERNAME is ${this.username}`);
    }
}
class Teacher extends User {
    constructor(username, email, password) {
        super(username)
        this.email = email;
        this.password = password;
    }
    addCourse() {
        console.log(`a new course was added by ${this.username}`);
    }
}
const surya = new Teacher("surya", "surya@hotmail.com", "123");
surya.addCourse();

const sujay = new User("sujay"); // wont hav access to addcourse
console.log(surya instanceof User);
console.log(surya instanceof Teacher);


