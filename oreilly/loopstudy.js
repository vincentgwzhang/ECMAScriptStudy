//https://learning.oreilly.com/videos/modern-javascript-from/9781789539509/9781789539509-video2_15

// For loop
for (let i = 0; i <= 3; i++) {
    if (i === 1) {
        // console.log('2 is my like number');
        continue;
    }

    if (i === 2) {
        break;
    }

    // console.log(i);
}


// While loop
let i = 0;
while (i < 3) {
    //console.log("In While loop, Number " + i++);
    i++;
}
i = 0;


// Do while loop
do {
    //console.log("In Do-While loop, Number " + i);
    i++;
} while (i < 3);
i = 0;

// Arrays loop
const cars = ['a','b','c','d','e'];

// for (let i = 0; i < cars.length; i++) {
//     console.log(cars[i]);
// }

// cars.forEach(function (value, index, array) {
//     //array stand for the whole array
//     console.log('Index ' + index + ':' + value);
// });

const  users = [
    { id : 1, name : "vincent1" },
    { id : 2, name : "vincent2" },
    { id : 3, name : "vincent3" },
    { id : 4, name : "vincent4" },
];

const ids = users.map(function (value, index, array) {
    return value.name;
});//ids is an array

const user = {
    firstName: 'Vincent',
    lastName: 'Zhang',
    age: 30
};
for (let x in user) {
    console.log(`${x} is ${user[x]}`)
}