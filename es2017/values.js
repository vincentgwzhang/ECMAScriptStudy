const obj = {
    name: "Jimmy",
    age: 18,
    height: 188
}

console.log(Object.keys(obj));
console.log(Object.values(obj));
console.log(Object.entries(obj));


const desc = Object.getOwnPropertyDescriptors(obj);
console.log(desc);