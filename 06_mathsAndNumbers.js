const score = 400;
// const balance = new Number(500); // ->another way of declaring number

console.log(score.toString());
console.log(score.toFixed(2));
// console.log(score.toPrecision(2)); this shit sucks and confusing
const tenLakhs = 1000000;
console.log(tenLakhs.toLocaleString('en-IN'));
console.log(Number.MAX_VALUE);
console.log(Number.MIN_VALUE);

//
console.log(Math.random()); // always gives value between 0 to 1
const min = 10;
const max = 20;
console.log((Math.floor(Math.random() * (max - min + 1)) + min)); // REMEMBER THIS FORMULA

