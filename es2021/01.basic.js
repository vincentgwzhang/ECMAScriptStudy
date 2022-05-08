// x &&= y ====> is ==========> when x is true, then x = y

let a = 1;
a &&= 2;
console.log(a);


let b = 0;
b &&= 3;
console.log(b);


// x &&= y ====> is ==========> when x is false, then x = y

const obj = {
    duration: 50,
    title: ''
};

obj.duration ||= 60;
obj.title ||= "default value";

console.log(obj);


// x &&= y ====> is ==========> when x is null / undefined, then x = y

const obj2 = {
    duration: 50,
    title: null,
};

obj2.duration ??= 60;
obj2.title ??= "default value";
obj2.descript ??= "default value 2";

console.log(obj2);