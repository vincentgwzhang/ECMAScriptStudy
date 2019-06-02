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