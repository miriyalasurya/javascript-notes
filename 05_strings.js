const name = "surya";
const repoCount = 50;
const heroName = new String("IronMan");

console.log(heroName[0]); //access ith element
console.log(heroName.length); //get length of string
console.log(heroName.toUpperCase()); //to change string to uppercase
console.log(heroName.charAt(2)); //another way of getting character at ith index
console.log(heroName.indexOf('I')); //get index number of a particular character
console.log(heroName.indexOf('I',2)); //get index number of a particular character from 2

let newString = heroName.substring(0,4); //get substring from [start,end)
console.log(newString);

// let anotherString = heroName.slice(0,4) 
let anotherString = heroName.slice(-4,-1)  //start from 4th from right and end till 1st from right ofc dont include it.
console.log(anotherString); //nMa

let newStringOne = "     surya  ";
console.log(newStringOne.trim()); //surya

let url = "https://surya.com/surya%20nigger"
console.log(url.replace('%20','-'));

console.log(url.includes('surya')); //returns boolean whether the string exists or not

let dashString = "Miriyala-Lakshmi-Surya";
console.log(dashString.split('-')); //return array with items separated by separator









