//https://learning.oreilly.com/videos/modern-javascript-from/9781789539509/9781789539509-video2_11


let val;

const today = new Date();
const birthday = new Date('9-11-1981');
val = birthday.getDate();//11
val = birthday.getFullYear();//1981
val = birthday.getMonth();//8 Notice!!!!s
val = birthday.getHours();//0
val = birthday.getMinutes();//0
val = birthday.getMilliseconds();//0
val = birthday.getTime();//369007200000

birthday.setMonth(2);//March

console.log(birthday);//