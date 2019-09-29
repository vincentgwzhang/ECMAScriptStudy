//https://learning.oreilly.com/videos/modern-javascript-from/9781789539509/9781789539509-video2_17

var a = 1;
let b = 2;
const c = 3;

if (true) {
    var a = 4;
    let b = 5;
    const c = 6;
}

console.log('Global scope: ', a, b, c);//4,2,3