/*
Maps are collection of key value pairs
but it also remembers the order of insertion
only unique keys are allowed
*/
const map = new Map();
map.set('IN', 'INDIA');
map.set('FR', 'FRANCE');
map.set('CN', 'CHINA');
map.set('USA', 'AMERICA');
console.log(map);
//FOR OF - returns direct values (doesnt work for objects)
for (const [key, value] of map) { //iterating map
    console.log(key, ':-', value);
}

const myObject = {
    js: 'javascript',
    cpp: 'c++',
    rb: 'ruby',
    swift: 'Swift By apple'
}
//FOR IN - returns keys/indexes (doesnt work for maps)
for (const key in myObject) { //iterating objects 
    console.log(myObject[key]);
}

const coding = ["js", "ruby", "java", "c++", "python"];
//FOR EACH - takes callback function as input
//callback func -> normal func without any name

// coding.forEach( function (val) {   //foreach usign "function callback"
//     console.log(val);
// });

coding.forEach((val) => { //foreach using arrow function
    console.log(val);
})

function printme(item) {
    console.log(item);
}
coding.forEach(printme); //only reference is passed when another function is called

coding.forEach((item, index, arr) => { // there are the parameters available for foreach loop's callback function
    console.log(item, index, arr);
})

const myCoding = [
    {
        languageName: "javascript",
        languageFileName: "js"
    },
    {
        languageName: "Java",
        languageFileName: "java"
    },
    {
        languageName: "python",
        languageFileName: "py"
    }
]

myCoding.forEach((item) => {
    console.log(item.languageName);
})

// but FOREACH loop never return ANYTHING NEVER!! so we use filter

const nums = [1, 2, 3, 4, 5, 6];
const newNums = nums.filter((num) => num > 4)
// const newNums = nums.filter( (num) => {num > 4} ) // this wont return anything since filter requires some return statement
console.log(newNums);


//.map()
const myNumbers = [1, 2, 3, 4, 5, 6, 7, 8];
const newNums1 = myNumbers.map((num) => num + 10);
console.log(newNums1);
const newNums2 = myNumbers.map((num) => num * 10)
                          .map((num) => num+1);//num here will be passed from the above map
console.log(newNums2);

//.reduce()
const myNums = [1, 2, 3];
const myTotal = myNums.reduce( function (acc, curVal) {
    return acc + curVal;    
},0) // accu, curval inside callback function and initial value after function

const myTotal2 = myNums.reduce( (acc, curVal) => {
    acc+curVal;
}, 0) 


const shoppingCart = [
    {
        itemName: "javascript",
        price: 2999
    },
    {
        itemName: "python",
        price: 1999
    },
    {
        itemName: "java",
        price: 3999
    },
    {
        itemName: "c++",
        price: 5999
    }
];

const priceToPay = shoppingCart.reduce( (acc, item) => item.price+acc , 0)
console.log((priceToPay));
