//singleton -> when anything is declared using an constructor "singleton" is also created
// Object.create() -> created using the Constructor

const mySym = Symbol("key1");
const jsUser = { //->created using literal
    name: "surya",
    age: 22,
    location: "Hyderabad",
    isLoggedIn: true,
    "full name": "Miriyala surya",
    [mySym]: "myKey1", //Symbols have to be declared like this!!!
    email: "miriyalasurya090@gmail.com"
} 

console.log(jsUser.name);
console.log(jsUser["name"]);
console.log(jsUser["full name"]);

// Object.freeze(jsUser); //this make sure no more changes can be done to this object

jsUser.greeting = function () {
    console.log(`Hello ${jsUser['name']}`);
}
jsUser.greeting()

//Singleton
const tinderUser = new Object();//declaration using Constructor
tinderUser.id = "123aabc";
tinderUser.user = "surya";
tinderUser.isLoggedIn = true;
// console.log(tinderUser);

console.log(Object.keys(tinderUser));//all keys stored in array
console.log(Object.values(tinderUser));//all values stored in array
console.log(Object.entries(tinderUser));//array of array for all entries
console.log(tinderUser.hasOwnProperty('isLoggedin'));//checks if the projects has the property

const regularUser = {
    email: "surya@hotmail.com",
    fullname: {
        firstname: "surya",
        lastname: "miriyala"
    }
}
console.log(regularUser);

const obj1 = { 1: "a", 2: "b" };
const obj2 = { 3: "c", 4: "d" };
// const obj3 = Object.assign(obj1, obj2);
//let obj3 = Object.assign({}, obj1, obj2); //professional way of merging
const obj3 = {...obj1, ...obj2}; //PROFESSIONAL WAY


//OBJECT DESTRUCTURING
const course = {
    corusename: "js in hindi",
    price: 999,
    instructor: "nigga"
}
const {instructor} = course //instead of using course.instructor for million fucking times we can use 'instructor' from now onwards
// const {instructor: alias} = course // we can also name it with another alias using this syntax
console.log(instructor);//->nigga

    