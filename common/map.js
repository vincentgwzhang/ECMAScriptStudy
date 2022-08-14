//* map 的背后其实是一个二维数组
{
    const m = new Map();
    const o = {p: 'Hello World'};

    m.set(o, 'content');
    //console.log(m.get(o));// "content"
    //console.log(m.has(o));// true
    //console.log(m.delete(o));// true
    //console.log(m.has(o));// false
}

{
    const map = new Map([
        ['name', '张三'],
        ['title', 'Author']
    ]);

    //console.log(map.size);// 2
    //console.log(map.has('name'));// true

}

{
    const map = new Map();

    map
        .set(1, 'aaa')
        .set(1, 'bbb');

    map.get(1) // "bbb"
}

{
    //console.log(new Map().get('asfddfsasadf'));//undefined
}
{
    let map = new Map()
        .set(1, 'a')
        .set(2, 'b')
        .set(3, 'c');
}

{
    const m = new Map();

    const hello = function() {console.log('hello');};
    m.set(hello, 'Hello ES6!') // 键是函数

    //console.log(m.get(hello));  // Hello ES6!
}


{
    const m = new Map();

    m.set('edition', 6);
    m.set(262, 'standard');
    m.set(undefined, 'nah');

    m.has('edition')     // true
    m.has('years')       // false
    m.has(262)           // true
    m.has(undefined)     // true
}

{
    const map = new Map([
        ['F', 'no'],
        ['T',  'yes'],
    ]);

    for (let key of map.keys()) {
        //console.log(key);
    }
// "F"
// "T"

    for (let value of map.values()) {
        //console.log(value);
    }
// "no"
// "yes"

    for (let item of map.entries()) {
        //console.log(item[0], item[1]);
    }
// "F" "no"
// "T" "yes"

// 或者
    for (let [key, value] of map.entries()) {
        //console.log(key, value);
    }
// "F" "no"
// "T" "yes"

// 等同于使用map.entries()
    for (let [key, value] of map) {
        //console.log(key, value);
    }

    //map.forEach((key, value) => {console.log(key + "---------" + value)});
// "F" "no"
// "T" "yes"
}

{
    const map = new Map([
        [1, 'one'],
        [2, 'two'],
        [3, 'three'],
    ]);

    [...map.keys()];//数组
// [1, 2, 3]

    [...map.values()];////数组
// ['one', 'two', 'three']

    [...map.entries()];//二维数组
// [[1,'one'], [2, 'two'], [3, 'three']]

    [...map];//二维数组
// [[1,'one'], [2, 'two'], [3, 'three']]
}




{
    const map0 = new Map()
        .set(1, 'a')
        .set(2, 'b')
        .set(3, 'c');

    const map1 = new Map([...map0].filter(([k, v]) => k < 3));
// 产生 Map 结构 {1 => 'a', 2 => 'b'}

    const map2 = new Map([...map0].map(([k, v]) => [k * 2, '_' + v]));
// 产生 Map 结构 {2 => '_a', 4 => '_b', 6 => '_c'}
}



{
    const map = new Map()
        .set(1, 'a')
        .set(2, 'b')
        .set(3, 'c');


    const reporter = {
        report: function(key, value) {
            //console.log("Key: %s, Value: %s", key, value);
        }
    };

    map.forEach(function(value, key, map) {
        this.report(key, value);
    }, reporter);//forEach方法还可以接受第二个参数，用来绑定this, 于是这里的this. 就是 reporter.report
}


//map 转换为数组
{
    function strMapToObj(strMap) {
        let obj = Object.create(null);
        for (let [k,v] of strMap) {
            obj[k] = v;
        }
        return obj;
    }

    const myMap = new Map()
        .set('yes', true)
        .set('no', false);

    let obj = strMapToObj(myMap);
    //console.log(obj["yes"]);
}

//数组转换为map
{
    function objToStrMap(obj) {
        let strMap = new Map();
        for (let k of Object.keys(obj)) {//由Object.keys(obj) 轮询
            strMap.set(k, obj[k]);
        }
        return strMap;
    }

    objToStrMap({yes: true, no: false})
}

//map 转换为json
{
    function strMapToJson(strMap) {
        return JSON.stringify(strMapToObj(strMap));
    }

    let myMap = new Map().set('yes', true).set('no', false);
    //console.log(strMapToJson(myMap));
// '{"yes":true,"no":false}'
}