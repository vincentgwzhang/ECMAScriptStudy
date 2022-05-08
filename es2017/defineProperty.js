const obj = {};

Object.defineProperty(obj, "name", {
    value: "Jimmy",
    writable: false,
    configurable: false,
    enumerable: false
});

Object.defineProperty(obj, "age", {
    value: 18,
    writable: false,
    configurable: false,
    enumerable: false
});

console.log(obj);