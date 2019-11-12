{
    const obj = {one: 1, two: 2, three: 3};

    for (let [key, value] of Object.entries(obj)) {
//        console.log(`key = ${key}, value = ${value}`);
    }
}

{
    // 把数组转化为 object
    const one_Array = [['one', 1], ['two', 2], ['three', 3]];

    const one_object = Object.fromEntries(one_Array);

    //console.log(one_object.one);
}

{
    // 把map 转化为 object
    const one_map = new Map();
    one_map.set('one', 1);
    one_map.set('two', 2);
    one_map.set('three', 3);

    const one_object = Object.fromEntries(one_map);
    //console.log(one_object.three);
}

{
    // 把 URLSearchParams 转化为 object
    const urlString = "one=1&two=2&three=3";
    const searchParams = new URLSearchParams(urlString);

    const one_object = Object.fromEntries(searchParams);
    //console.log(one_object.two);
}
