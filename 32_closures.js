/*
 * Inner function can access outer function variables this is lexical scoping 
 */
//LEXICAL SCOPING
function outer() {
    let username = "surya";
    console.log("OUTER", username);
    function inner() {
        console.log("INNER", username);
    }
    inner();
}
outer();// WORKS W

//CLOSURE
function fun() {
    const name = "Mozilla";
    function displayName() {
        console.log(name);
    }
    return displayName;
}
const myFunc = fun();
myFunc();