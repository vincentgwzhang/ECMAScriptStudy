//https://learning.oreilly.com/videos/modern-javascript-from/9781789539509/9781789539509-video2_9

const numbers1 = [43, 56, 5, 89, 74, 20];
const numbers2 = new Array(43, 56, 5, 89, 74, 20);
const fruit = ['Apple','Orange','Banana'];
const mixed = ['Apple', 2, true, undefined, {a:'c', b:'b'}, 'Orange','Banana', new Date()];

let val = numbers1.length;
val = Array.isArray(numbers1);
val = numbers1[2];
val = numbers1.indexOf(74);//4
numbers1.push(250);//put to an end
numbers1.unshift(1234);//put to the first
numbers1.pop();//remove from the last
numbers1.shift();//take from the fitst

//Before : [ 43, 56, 5, 89, 74, 20 ]
//After  : [ 43, 56, 20 ]
numbers1.splice(2,3);//start from 2 and delete 3 element

numbers1.reverse();//revert order
val = numbers1.concat(numbers2);//concat together
numbers1.sort(function (x, y) {
    return y - x;
});

//find function
function under30 (num) {
    return num < 30;
}
val = numbers1.find(under30);



console.log(val);