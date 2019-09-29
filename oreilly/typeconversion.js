//https://learning.oreilly.com/videos/modern-javascript-from/9781789539509/9781789539509-video2_5

let val;

//number to string
val = String(555);
val = String(4+4);

//bool to string
val = String(true);

// Date to string
val = String(new Date());

// Array to String
val = String([1,2,3,4]);

val = (5).toString();
val = (true).toString();

//String to number
val = Number('5');

//boolean to number
val = Number(true);
val = Number(null);// null and false also = 0
val = Number('nudefefef');//NaN
val = Number([1,2,3]);//NaN

val = parseInt('200');
val = parseInt('200.6');//200
val = parseFloat('200.62');//200.62


// console.log(val);
// console.log(typeof val);
//console.log(val.length);//undefined if val = 5
// console.log(val.toFixed(2));//undefined if val = 5



const val1 = String(5);
const val2 = 6;
const sum = val1 + val2;
// console.log(sum);
// console.log(typeof sum);//56, as string
