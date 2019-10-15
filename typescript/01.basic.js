//布尔值
var isDone = false;
//number
var delLiteral = 6;
// console.log(delLiteral);
//string and DSL
var birth = 1983;
var lastName = "Vincent";
var firstName = "Zhang";
var fullSentence = "Hello, my name is " + (lastName + " " + firstName) + ", I am " + (2019 - birth);
// console.log(fullSentence);
//JavaScript 没有空值（Void）的概念，在 TypeScript 中，可以用 void 表示没有任何返回值的函数：
function showName(message) {
    if (message === void 0) { message = 'default message'; }
    console.log(message);
}
// showName(fullSentence);
// showName();
{
    //null and undefined
    var u = undefined;
    var n = null;
    var testA = undefined;
    var testB = null;
    var testC = undefined;
    var testD = null;
    // console.log(u);//undefined
    // console.log(n);//null
    // console.log(testA);//undefined
    // console.log(testB);//null
    // console.log(testC);//undefined
    // console.log(testD);//null
    // console.log(typeof u);//undefined
    // console.log(typeof n);//object
    // console.log(typeof testA);//undefined
    // console.log(typeof testB);//object
    // console.log(typeof testC);//undefined
    // console.log(typeof testD);//object
    var nullANumber = NaN;
    var infinityANumber = Infinity;
    // console.log(nullANumber);//NaN
    // console.log(infinityANumber);//Infinity
    // console.log(typeof nullANumber);//number
    // console.log(typeof infinityANumber);//number
    // 结论：对于 undefined, null, Infinity, NaN, 无论怎么定于，打印出来都是原来的类型和值
    // 对于 undefined, 类型就是 undefined
    // 对于 null, 类型就是 object
    // 对于 Nan, 类型就是 number
    // 对于 Infinity, 类型就是 number
}
