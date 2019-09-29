//https://learning.oreilly.com/videos/modern-javascript-from/9781789539509/9781789539509-video2_10

const person = {
    firstName: 'vincent',
    lastName : 'Zhang',
    age: 36,
    email: 'vincentzhang@outlook.es',
    hobbies: ['a','b'],
    address: {
        city: 'Miami',
        state: 'FL'
    },
    getBirthday: function () {
        return 2019 - this.age;
    }
};

let val;

val = person;
val = person.firstName;//vincent
val = person['firstName'];//vincent
val = person['hobbies'][1];//b
val = person['address']['city'];//Miami
val = person.getBirthday();//1983

const peoples = [
    {name:'aaa', age: 36},
    {name:'bbb', age: 34}
];
























console.log(val);