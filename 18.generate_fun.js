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

    // obj = hw.next();
    // console.log(obj.value + "|" + obj.done);//579|false
    // console.log("===============================================");
    //
    // obj = hw.next();
    // console.log(obj.value + "|" + obj.done);//undefined|true
    // console.log("===============================================");
}

{
    function* foo() {
        yield 1;
        yield 2;
        yield 3;
        yield 4;
        yield 5;
        return 6;
    }

    for (let v of foo()) {
        //Because when it gets 6, the done result would be true, then loop will be end immediately.
        //console.log(v);
    }
}

{
    /**
     *
     * 一旦抛出exception, 那么就所有结束
     * @returns {IterableIterator<number>}
     */
    function* g() {
        yield 1;
        console.log('throwing an exception');
        throw new Error('generator broke!');
        yield 2;
        yield 3;
    }

    function log(generator) {
        var v;
        console.log('starting generator');
        try {
            v = generator.next();
            console.log('第一次运行next方法', v);//第一次运行next方法 { value: 1, done: false }
        } catch (err) {
            console.log('捕捉错误', v);
        }
        try {
            v = generator.next();
            console.log('第二次运行next方法', v);
        } catch (err) {
            console.log('捕捉错误 22333: ', v);//捕捉错误 22333:  { value: 1, done: false }
        }
        try {
            v = generator.next();
            console.log('第三次运行next方法', v);//第三次运行next方法 { value: undefined, done: true }
        } catch (err) {
            console.log('捕捉错误', v);
        }
        console.log('caller done');
    }

    //log(g());
}

{
    function* gen() {
        yield 1;
        yield 2;
        yield 3;
    }

    var g = gen();

    //console.log(g.next());// { value: 1, done: false }
    //console.log(g.return('foo'));// { value: "foo", done: true }
    //console.log(g.next());// { value: undefined, done: true }
}

{
    function* foo() {
        yield 'a';
        yield 'b';
    }

    function* bar() {
        yield 'x';
        for (let i of foo()) {
            //console.log(i);
        }
        yield 'y';
    }

    for (let v of bar()){
        //console.log(v);//x a b y
    }
}

{
    function* foo() {
        yield 2;
        yield 3;
        return "foo";
    }

    function* bar() {
        yield 1;
        var v = yield* foo();
        console.log("v: " + v);
        yield 4;
    }

    var it = bar();

    // console.log(it.next());// {value: 1, done: false}
    // console.log(it.next());// {value: 2, done: false}
    // console.log(it.next());// {value: 3, done: false}
    // console.log(it.next());// "v: foo" // {value: 4, done: false}
    // console.log(it.next());// {value: undefined, done: true}
}