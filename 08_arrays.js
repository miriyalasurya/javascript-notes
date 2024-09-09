const myArr = [0, 1, 2, 3, 4, true, "surya"]; //array is also any object
// arrays share same reference when copied (Shallow Copy)

myArr.push(5);    //push ele to end
myArr.push(6);
myArr.pop();      //remove last ele
myArr.unshift(9); //add ele to start
myArr.shift();    //remove first ele

console.log(myArr.includes(4)); //does this array have '4'
console.log(myArr.indexOf(3)); //index if exists else -1

const newArr=myArr.join() //binds and joins and converts it into string
console.log(myArr);
console.log(newArr);
console.log(typeof newArr); //string

// Slice, Splice

console.log("A ", myArr);
const myn1 = myArr.slice(0,4); // return array with 0-3
console.log(myn1);
console.log("B ", myArr);// no change in main array

const myn2 = myArr.splice(1,4); // includes range
console.log(myn2);
console.log("C ", myArr); //the range used in splice is removed from array





const marvel = ["spiderman", "thor", "ironman"];
const dc = ["superman", "flash", "batman"];
// marvel.push(dc); //creates a 2D array instead of concat  
const allHeros = marvel.concat(dc); //returns a new array by merging
console.log(allHeros);
const allNewHeros = [...marvel , ...dc]; //bettwe way of merging
console.log(allNewHeros);

const mixedArr = [1, 2, [3, 4], 5, [6, [7, 8, 9]]];
const usableArr = mixedArr.flat(Infinity);// this will faltten the array arg is the depth of your recursion
console.log(usableArr);

//we can convert any data type into any array 
console.log(Array.from("surya"));
console.log(Array.from(123));//return nothing
console.log(Array.from({name: "Surya"})); //return nothing


let score1 = 100;
let score2 = 100;
let score3 = 100;
console.log(Array(score1, score2, score3));









