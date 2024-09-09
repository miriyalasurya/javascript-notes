let myDate = new Date();
console.log(myDate);
console.log(myDate.toString());  //gives date, time, and timezone
console.log(myDate.toDateString()); //only date
console.log(myDate.toLocaleString());//date, and time with AM or PM
console.log(typeof myDate);// Object
// let myCreatedDate= new Date(2023, 0, 23); //2023, Jan, 23rd (YMD)
// let myCreatedDate = new Date("2023-01-14") //(yyyy-mm-dd)
let myCreatedDate = new Date("01-14-2023") //(mm-dd-yy)
console.log(myCreatedDate.toDateString());
console.log(Date.now());//return milliseconds
let newDate = new Date();
console.log(newDate.getDay());
console.log(newDate.getDate());
console.log(newDate.getMonth()); //0 indexing




