function sayMyName() {
    console.log('S');
    console.log('U');
    console.log('R');
    console.log('Y');
    console.log('A');
}
// sayMyName   -> this is function reference
sayMyName()  //-> this is function execution

/*
parameters => when variables are passed during declaring the function
arguments => when variables are passed during calling the function
*/
function addTwoNumbers(number1, number2){ 
    return(number1+ number2);
}
let result = addTwoNumbers(3,4);

function loginUserMessage(username){
    return `${username} just logged in`;
}
console.log(loginUserMessage("surya"));

function calculateCartPrice(...num1){ //when you dont know how many arguments you're gonna get use 'rest operator'
    return num1;
}
console.log((calculateCartPrice(200,300,400)));// [200,300,400]





