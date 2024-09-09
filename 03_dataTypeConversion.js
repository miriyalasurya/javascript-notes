let score = "";
// let score = "33abc" when this converted to number give NaN anduke use TS
let newScore = Number(score); //Use Capital letter for datatype conversion
console.log(typeof newScore);
console.log(newScore);
/*
WHEN CONVERTED TO NUBMER
    "33" -> 33
    null -> 0
    undefined -> NaN
    "33abc" -> NaN
    true -> 1
    "" -> 0
*/
/*
WHEN CONVERTED TO BOOLEAN
    "" -> false
    1  -> true
    "anything" ->true
*/
/*
WHEN CONVERTED TO STRING
    "" -> "0"
    null -> "null"
    undefined -> "undefined"
*/


console.log("" + 1 + 0 );  //10
console.log("" - 1 + 0);   //-1
console.log(true + false); //1
console.log(6 / "3");      //2   
console.log("2" * "3");    //6
console.log(4 + 5 + "px"); //9px
console.log("$" + 4 +5);   //$45
console.log("4" - 2);      //2
console.log("4px" - 2);    //NaN
console.log("  -9   " + 5);//"  -9     5"
console.log("   -9" - 5);  // -14
console.log(null + 1);     //1
console.log(undefined + 1);//NaN
console.log(" \t \n" -2);  //-1

console.log(null > 0); //false
console.log(null == 0);//false
console.log(null >= 0);//true
console.log(undefined == 0);//false
console.log(undefined > 0);//false
console.log(undefined >= 0);//false

