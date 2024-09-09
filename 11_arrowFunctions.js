/*
    -"this" keyyword provides the context where you are calling
    -"this" when called globally in node envirnoment gives and empty object
    -"this" when called globally in browser gives "window" which have tons of methods and all
*/
function test(){
    // console.log(this); //prints hell lot of stuff
    let username = "surya";
    console.log(this.username); // ->undefined here but works fine in objects
}
test();


//arrow functions
const addTwo = (num1, num2) => {
    return num1 + num2;
}
console.log((addTwo(1,2)));
const addThree = (num1, num2, num3) => num1+num2+num3 //IMPLICIT RETURN
console.log(addThree(1,2,3));

