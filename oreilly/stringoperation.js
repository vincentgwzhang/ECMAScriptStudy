//https://learning.oreilly.com/videos/modern-javascript-from/9781789539509/9781789539509-video2_7

const firstName = 'Vincent';
const lastName = 'Zhang';

let val;

val = firstName + lastName;
val = val.concat("", " hello world");//VincentZhang hello world
val = val.toLowerCase();
val = val.toUpperCase();
val = firstName[0];//V
val = firstName.indexOf("V");//0
val = firstName.charAt(firstName.length - 1);//t
val = firstName.substring(0, 4);//Vinc

val = firstName.slice(-3);//ent, allow to a negative number
val = "a v c".split(" ");//val[1] = 'v'
val = firstName.replace('Vin', 'Cin');//Cincent
val = firstName.includes('Vin');//true
console.log(val);