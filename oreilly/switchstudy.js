//https://learning.oreilly.com/videos/modern-javascript-from/9781789539509/9781789539509-video2_13

const color = 'aaa';

switch (color) {
    case 'yellow':
        console.log('Color is yellow'); break;
    case 'red':
        console.log('Color is red'); break;
    case 'blue':
        console.log('Color is blue'); break;
    default:
        console.log('Color is default'); break;
}

switch (new Date().getDay()) {
    case 0:
        console.log('Today is Sunday'); break;
    case 1:
        console.log('Today is Monday'); break;
    default:
        console.log('Today is not Sunday nor Monday'); break;
}