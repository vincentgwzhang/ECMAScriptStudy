//http://es6.ruanyifeng.com/#docs/destructuring

////////////////////////////////////////////////////////////////
//只要匹配就行
{
    let [a, b, c] = [1, 2, 3];

    let [foo, [[bar], baz]] = [1, [[2], 3]];
    foo // 1
    bar // 2
    baz // 3

    let [head, ...tail] = [1, 2, 3, 4];
    head // 1
    tail // [2, 3, 4]

    //console.log(typeof tail)

    let [x, y] = [1, 2, 3];
    x // 1
    y // 2
    //console.log(x);
    //console.log(y);//从左边开始拿
}


{
    //用于对象
    let { bar, foo } = { foo: 'aaa', bar: 'bbb' };
    //console.log(bar);
    //console.log(foo);
}