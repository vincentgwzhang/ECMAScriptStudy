//https://learning.oreilly.com/videos/modern-javascript-from/9781789539509/9781789539509-video2_12

const val = '100';

if (val > 100) {
    console.log("aaa");
} else {
    console.log("bbb");
}

if (val === 100) {
    console.log("aaa");
} else {
    console.log("bbb");
}

if (val !== 100) {
    console.log("aaa");
} else {
    console.log("bbb");
}

const age = 20;

if (age > 0 && age < 12) {
    console.log("age between 0 to 12");
} else if (age >= 30 && age <= 90) {
    console.log("age between 30 to 90");
} else {
    console.log("age between more than 90");
}

if (age > 22 || age < 12) {
    console.log("age between 12 to 22");
}

console.log(age === 20? "age is 20" : "age is not 20");

// Not suggest
if (age > 0 && age < 12)
    console.log("age between 0 to 12");
else if (age >= 30 && age <= 90)
    console.log("age between 30 to 90");
else
    console.log("age between more than 90");