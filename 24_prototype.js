

let myHeros = ["thor", "spiderman"]

let heroPower = {
    thor: "hammer",
    spiderman: "sling",
    getSpierPower: function () {
        console.log(`spidy power is ${this.spiderman}`);
    }
}
Object.prototype.surya = function () {
    console.log(`this nigga present in all objects`);
}
Array.prototype.heySurya = function () {
    console.log(`Array says hi surya`);
}
heroPower.surya(); //Works W
myHeros.surya();//Works W
// heroPower.heySurya(); shit doesnt work
myHeros.heySurya(); //Works W

const Teacher = {
    makeVide: true
}
const TeachingSupport = {
    isAvailable: false
}
const TASupport = {
    makeAssignment: 'JS Assignment',
    fulltime: true,
    __proto__: TeachingSupport // you can use that object here (Prototypal Inheritanace)
}

//MODERN SYNTAX
Object.setPrototypeOf(TeachingSupport, Teacher)//teachingsupport ko access dedo teacher ki

let myName = "Surya      ";
String.prototype.trueLength = function () {
    console.log(`${this}`);
    console.log(`${this.trim().length}`);
}
myName.trueLength();


