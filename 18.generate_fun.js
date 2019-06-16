//http://es6.ruanyifeng.com/#docs/generator
{
    /**
     *
     然后，Generator 函数的调用方法与普通函数一样，也是在函数名后面加上一对圆括号。
     不同的是，调用 Generator 函数后，该函数并不执行，返回的也不是函数运行结果，
     而是一个指向内部状态的指针对象，也就是上一章介绍的遍历器对象（Iterator Object）。

     下一步，必须调用遍历器对象的next方法，使得指针移向下一个状态。也就是说，每次调用next方法，
     内部指针就从函数头部或上一次停下来的地方开始执行，直到遇到下一个yield表达式（或return语句）为止。
     换言之，Generator 函数是分段执行的，yield表达式是暂停执行的标记，而next方法可以恢复执行。
     *
     * @returns {IterableIterator<string>}
     */
    function* helloWorldGenerator() {
        console.log("execution 1");
        yield 'hello';
        console.log("execution 2");
        yield 'world';
        console.log("execution 3");
        return 'ending';
    }

    var hw = helloWorldGenerator();

    // console.log("===============================================");
    // let obj = hw.next();
    // console.log(obj.value + "|" + obj.done);
    // console.log("===============================================");
    // obj = hw.next();
    // console.log(obj.value + "|" + obj.done);
    // console.log("===============================================");
    // obj = hw.next();
    // console.log(obj.value + "|" + obj.done);
    // console.log("===============================================");
    // obj = hw.next();
    // console.log(obj.value + "|" + obj.done);
    // console.log("===============================================");
}


{
    function* gen() {
        yield  123 + 456;
    }

    let hw = gen();

    obj = hw.next();
    console.log(obj.value + "|" + obj.done);
    console.log("===============================================");

    obj = hw.next();
    console.log(obj.value + "|" + obj.done);
    console.log("===============================================");
}