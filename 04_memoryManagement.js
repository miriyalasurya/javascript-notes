/*
Two Types of memory
-Stack (Primitive)
-Heap  (Reference)
*/

//Stack
let myYoutubeName = "miriyala surya";
let anotherName = myYoutubeName;
anotherName = "nigga surya"; //this wont change value stored in "myYoutubename"

//Heap
let userOne = {
    email: "surya@hotmail.com",
    upi: "user@ybl",
}

let userTwo = userOne;  // userOne and userTwo both will share reference to the object instead of copy so any changes made in one will affect key values in both
userTwo.email = "niggasurya@hotmail.com"
console.log(userOne); //niggasurya@hotmail.com
console.log(userTwo); //niggasurya@hotmail.com
