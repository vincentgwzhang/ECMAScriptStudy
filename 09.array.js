//http://es6.ruanyifeng.com/#docs/array

{
    for (let [index, elem] of ['a', 'b'].entries()) {
        // console.log(index, elem);
    }
}

{
    let letter = ['a', 'b', 'c'];
    let entries = letter.entries();
    // console.log(entries.next().value); // [0, 'a']
    // console.log(entries.next().value); // [1, 'b']
    // console.log(entries.next().value); // [2, 'c']
}

{
    // console.log([1, 2, 3].includes(2));
    // console.log([1, 2, 3].indexOf(3));//2
}

{
    //flat()默认只会“拉平”一层，如果想要“拉平”多层的嵌套数组，
    // 可以将flat()方法的参数写成一个整数，表示想要拉平的层数，默认为1。
    //[1, 2, [3, [4, 5]]].flat()
}

{
    function displayNumber(x) {
        //console.log(x);
    }
    [1,2,3].forEach(x => displayNumber(x));
    [1,2,3].forEach(displayNumber);
}

{
    function isOdd(x) {
        return x % 2 == 0;
    }

    //console.log([1,2,3].filter(isOdd));
}

{
    function isOdd(x) {
        return x % 2 == 0;
    }
    //console.log([,2,4,6].every(isOdd)) // true
}

{
    //console.log([1,2,3].reduce((x,y) => x+y));//6
}

{
    function isOdd(x) {
        return x % 2 == 0;
    }
    //console.log([,2,4,6].some(isOdd)) // 全部，也是some
}

{
    //[1,2,3].map(x => x*x).forEach(x=>console.log(x));
}

{
    // console.log(["a","b","c"].join("#"));//a#b#c
}

{
    //console.log(["a","b","c"].toString());
}

{
    let arr = [1,2,3];
    //console.log(Math.max(...arr));
}