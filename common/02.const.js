//顶层对象，在浏览器环境指的是window对象，在 Node 指的是global对象。ES5 之中，顶层对象的属性与全局变量是等价的。

//console.log(window); 这个应该只能够在


/**
 1. 浏览器里面，顶层对象是window，                  (但 Node 和 Web Worker 没有window。)
 2. 浏览器和 Web Worker 里面，self也指向顶层对象，但是 Node 没有self。
 3. Node 里面，顶层对象是global，但其他环境都不支持。

 浏览器: window, self
 Web Worker: self
 Node:  global
 */

var getGlobal = function () {
    if (typeof self !== 'undefined') { return self; }
    if (typeof window !== 'undefined') { return window; }
    if (typeof global !== 'undefined') { return global; }
    throw new Error('unable to locate global object');
};

console.log(getGlobal().process.title);

const PI = 3.1415926;

console.log(PI);


///////////////////////////////////////////////////
//let 一样，重新定义一个变量也可以，但不能用 let 直接重新定义
let M = "222s";
M = "111";
M = 123;
console.log(M);

///////////////////////////////////////////////////
//const 也一样有块作用域
if (true) {
    const SESSION2 = 5;
}

const SESSION2 = "2222"
////////////////////////////////////////////////////
//const 规则一样，都是

var message = "Hello!";
let age = 25;

// 以下两行都会报错
//const message = "Goodbye!";
//const age = 30;

//const实际上保证的，并不是变量的值不得改动，而是变量指向的那个内存地址所保存的数据不得改动。

//这是一个函数
var this_is_a_function = (x) => console.log(x);
this_is_a_function("xxxx");

let this_is_a_function2 = () => console.log("fuck");
this_is_a_function2();


/////////////////////////////////////////////////////////////////////////
//据说这个函数的作用是彻底冻结一个object
var constantize = (obj) => {
    Object.freeze(obj);
    Object.keys(obj).forEach( (key, i) => {
        if ( typeof obj[key] === 'object' ) {
            constantize( obj[key] );
        }
    });
};
constantize(new Date());