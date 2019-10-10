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

{
    var wallets = [4,7.8,3];
    var totalMoney = wallets.reduce( function (countedMoney, wallet) {
        return countedMoney + wallet;
    }, 0.3);
    // console.log(totalMoney); == 4 + 7.8 + 3 + 0.3
}

{
    //Array could be done with Lambda
    let arr = [1,2,3,4,5,6,7,8,9,10];

    //map function
    {
        let arr2 = arr.map(x => x * 2);
        arr2.forEach(function (item) {
            // console.log(item); 2,4,6,....20
        })
    }


    //reduce
    {
        let sum = arr.reduce(function (total, item) {
            //console.log("counting:" + item);
            total = total + item;
            return total;
        });
        //console.log(sum);
    }


    //filter
    {
        let sum = arr.filter(function (value, index, arr) {
            return index % 2 == 0;
        }).reduce(function (total, item) {
            total = total + item;
            return total;
        });
        // console.log(sum);// == 1 + 3 + 5 + 7 + 9 = 25
    }

    //every
    {
        let booleanValue1 = arr.every(function (item, index) {
            return item < 11;
        });
        // console.log(booleanValue1);//true
    }

    //some
    {
        let booleanValue2 = arr.some(function (item, index) {
            return item < 5;
        });
        // console.log(booleanValue2);//true
    }





}