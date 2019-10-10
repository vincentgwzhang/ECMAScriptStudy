//var 的作用域在整个global，let 的作用域在 block
var a = [];
for (var i = 0; i < 10; i++) {
    a[i] = function () {
        //console.log(i);
    };
}
a[6](); // 10

for (let i = 0; i < 10; i++) {
    a[i] = function () {
        //console.log(i);
    };
}
a[6](); // 6

///////////////////////////////////////////////////////////////////
//无论有没有let 和 var 都不允许首先是用未定义函数。但是如果是用了再用 var 就不会出错，
//而是用了再用 let, 就会报错

typeof x; // ReferenceError
//let x; //有趣的是，假如 let 这句话存在， typeof 反而会报错，但如果不存在，反而没有事情发生

//console.log(typeof 3);
//console.log(typeof "ddd");

//////////////////////////////////////////////////////////////////////
function bar(x = 2, y = x) {
    // console.log(x);
    // console.log(y);
    return [x, y];
}
let m = bar(); // [2, 2]
//console.log(Array.isArray(m));//true

//////////////////////////////////////////////////////////////////////
//var 允许重复声明变量， let 不允许
var x11 = x11; //不会报错
//let x22 = x22; 报错


//////////////////////////////////////////////////////////////////////
//var 允许重复声明变量， let 不允许
var x12 = 12;
//console.log(x12);
var x12 = "cscsc";
//console.log(x12);


//上面代码的原意是，if代码块的外部使用外层的tmp变量，内部使用内层的tmp变量。
//但是，函数f执行后，输出结果为undefined，原因在于变量提升
//导致内层的tmp变量覆盖了外层的tmp变量。
var tmp222 = new Date();
function f() {
    //console.log(tmp222);undefined
    if (false) {
        var tmp222 = 'hello world';
    }
}
f(); // undefined


//////////////////////////////////////////////////////////////////////
//代码不报错，因为let 为作用域，并且做到变量屏蔽
{{{{
    let insane = 'Hello World';
    {let insane = 'Hello World'}
}}}};
///////////////////////////////////////////////////////////////////////
//代码不报错，因为let 为作用域，并且做到变量屏蔽
{{{{
    let insane2 = 'Hello World';
    {let insane2 = 122121}
}}}};
///////////////////////////////////////////////////////////////////////
// IIFE 写法, 上面得写反而没有错，因为这样也能让变量即使是用 var 也不出错
(function WW_EE1(x) {
    //console.log("x is a value:" + x);
    var tmpXXYYY = "";
    //console.log("WW_EE1 function triggered");
}(5));//这个就是自调用的意思


// 块级作用域写法
{
    let tmpXXYYY = "...";
}
///////////////////////////////////////////////////////////////////////
// ES6 中，函数能够在块内重复，重新定义
function af1() {
    console.log('I am outside!');
}

let override = true;
if (override) {
    // 即使重新定义了af1  函数
    function af1() {
        console.log('I am inside!');
    }
}
//af1();

///////////////////////////////////////////////////////////////////////
// let 还能作为函数的句柄，进而调用函数
{
    let af2 = function () {
        return "ccc";
    };

    //console.log(af2());

    let af3 = (x=7) => {return "ddd";};

    //console.log(af3(6))
}
