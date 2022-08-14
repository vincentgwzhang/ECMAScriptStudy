const proto = {
    protoProp: 'protoProp',
};

const obj = {
    __proto__: proto,
    objProp: 'objProp',
};

console.log('protoProp' in obj); // output - true.
console.log(Object.hasOwn(obj, 'protoProp')) // output - false
console.log(Object.hasOwn(proto, 'protoProp')); // output - true.


const vin = {
    name: 'vincent',
    age: 39
}

console.log(Object.hasOwn(vin, 'name'));