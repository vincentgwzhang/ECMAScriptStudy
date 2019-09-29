//https://learning.oreilly.com/videos/modern-javascript-from/9781789539509/9781789539509-video2_14


function  greet0(firstName, lastName) {
    return 'hello ' + firstName + ' ' + lastName;
}

function  greet1(firstName, lastName) {
    if (typeof  firstName === 'undefined') {
        firstName = 'John';
    }

    if (typeof  lastName === 'undefined') {
        lastName = 'Doe';
    }
    return 'hello ' + firstName + ' ' + lastName;
}

function  greet2(firstName = 'Vincent', lastName = 'Zhang') {
    return 'hello ' + firstName + ' ' + lastName;
}

// console.log(greet0());//hello undefined undefined
// console.log(greet1());//hello John Doe
// console.log(greet2());//hello Vincent Zhang

const square = function (x = 9) {
    return x * x;
};
// console.log(square(6));//36

//Declare and run at the same time
(function (name = 'Johnson') {
    console.log("I self run, " + name);
})('vincent');


/////////////////////////////////////////////////////////////
const todo = {
    add: function () {
        console.log("Add function");
    },
    edit: function () {
        console.log("edit function");
    }
};

todo.delete = function () {
    console.log("delete function");
};

todo.delete();
/////////////////////////////////////////////////////////////
