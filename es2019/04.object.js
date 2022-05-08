const input = {
    a: 1,
    b: 2,
    c: 3
}

const output = {
    ...input,
    c: 4
}

console.log(output);


let {a, ...rest2} = input; // this means delete input property of a property
console.log(rest2);