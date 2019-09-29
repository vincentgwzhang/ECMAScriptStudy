//https://learning.oreilly.com/videos/modern-javascript-from/9781789539509/9781789539509-video2_6

const num1 = 100;
const num2 = 50;

let val;


// simple math with numbers
val = num1 + num2;
val = num1 * num2;
val = num1 - num2;
val = num1 / num2;
val = num1 % num2;

// Math object
val = Math.PI;
val = Math.E;
val = Math.round(2.8);//3
val = Math.ceil(2.1);//3
val = Math.floor(2.9);//2
val = Math.sqrt(64);//8
val = Math.abs(-64);//64
val = Math.pow(2, 3);//8
val = Math.min(1,2,-4,5);//-4
val = Math.max(6,8,2);//8
val = Math.random();//0 to 1
val = Math.random() * 20;//0 to 20
val = Math.floor(Math.random() * 20);//0 to 20

console.log(val);
console.log(typeof val);