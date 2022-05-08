const arr = ['es6','es7','es8'];

// includes (value, fromIndex)
// if -1, then would start from right bound

console.log(arr.includes('es7'));     // true
console.log(arr.includes('es7', 1));  // true
console.log(arr.includes('es7', 2));  // false
console.log(arr.includes('es7', -1)); // false
console.log(arr.includes('es7', -2)); // true


const arr2 = ['es6','es7', NaN, 'es8'];
console.log(arr2.includes(NaN));      // true
console.log(arr2.indexOf(NaN));       // -1, because can not recongize

console.log(2 ** 10);