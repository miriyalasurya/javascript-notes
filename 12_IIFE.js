/*

Immediately Invoked Function Expressions (IIFE)
-helps us from global scope pollution
-immediately invokes as sun as script is run
*/

// function status(){
//     console.log('DB Connected');
// }
// status();

(function status() {
    console.log('DB Connected');
})(); //same as above code but executed immediately SEMICOLON MUST

(() => {
    console.log('DB Connected 2');
})();

((name) => {
    console.log(`hello ${name}`);
})('surya');