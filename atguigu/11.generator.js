//生成器是一个特殊的函数，用于异步编程
{
    function * gemA() {
        yield console.log('hello');
        yield console.log('hello 2');
        yield console.log('hello 3');
        yield console.log('hello 4');
    }

    let iterator = gemA();
    let result = iterator.next();
    let isDone = result.done;
    while (!isDone) {
        result = iterator.next()
        isDone = result.done;
    }

}

{
    function * gen(arg) {
        console.log(arg);
        let one = yield 111;
        console.log(one);

        let two = yield 222;
        console.log(two);

        let three = yield 333;
        console.log(three);
    }

    let iterator = gen('aaa');
    // console.log(iterator.next());
    // console.log(iterator.next('BBB'));
    // console.log(iterator.next('CCC'));
    // console.log(iterator.next('DDD'));
}

{
    function getUserData(inputParam) {
        setTimeout(() => {
            let data = 'step 1';
            console.log(`${inputParam} received, output = ${data}`);
            iterator.next(data);
        }, 1000);
    }

    function getOrderData(inputParam) {
        setTimeout(() => {
            let data = 'step 2';
            console.log(`${inputParam} received, output = ${data}`);
            iterator.next(data);
        }, 1000);
    }

    function getItemData(inputParam) {
        setTimeout(() => {
            let data = 'step 3';
            console.log(`${inputParam} received, output = ${data}`);//这里没有 iterator.next(data);
        }, 1000);
    }

    function * gen(inputParam) {
        let userDataOutput = yield getUserData(inputParam);
        console.log(userDataOutput);//step 1
        let orderDataOutput = yield getOrderData(userDataOutput);
        console.log(orderDataOutput);//step 2
        yield getItemData(orderDataOutput);
    }

    let iterator = gen('step 0');
    iterator.next();
}
