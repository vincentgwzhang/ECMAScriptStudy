console.log('abc'.padStart(10)); // "       abc"
console.log('abc'.padStart(10, 'mmm')); // "mmmmmmmabc"
console.log('abc'.padStart(10, '1234567890')); // "1234567abc"


const now = new Date();
const year = now.getFullYear();
const month = (now.getMonth() +1).toString().padStart(2, '0');
const day = now.getDate().toString().padStart(2, '0');
console.log(`${year}-${month}-${day}`);


const tel = '18781268679';
const newTel = tel.slice(-4).padStart(tel.length, '*');
console.log(newTel);