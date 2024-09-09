console.log(Math.PI);
const descripter = Object.getOwnPropertyDescriptor(Math, "PI")
console.log(descripter);

const surya = {
    name: "surya",
    price: 250,
    isAvailable: true
}
console.log(surya);
console.log(Object.getOwnPropertyDescriptor(surya, "name"));
Object.defineProperty(surya, 'name',{
    writable: false,
    enumerable: false,
})
console.log(Object.getOwnPropertyDescriptor(surya, "name"));

