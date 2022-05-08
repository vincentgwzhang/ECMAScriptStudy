// if use ??, it means when the left is undefined or null, then use right

const foo = undefined ?? "foo";
const zoo = null ?? "zoo";

console.log(foo);
console.log(zoo);

// if use || it means when the left is '', NaN, false, then use right

const foo2 = "" || "default"
console.log(foo2);

const foo3 = NaN || 20;
console.log(foo3);

const foo4 = false || "this is true value";
console.log(foo4);