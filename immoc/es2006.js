//=================================== Knowledge Point : Declaration ===============================
{
    let a = 5

    const obj = {
        name: 'xiecheng',
        age: 34,
        skill: {
            name: 'coding'
        }
    };

    Object.freeze(obj); // after that, it can not be assigned new value, but it still not error if update, but it only freeze first level
    obj.name = 'vincent'; //not effect
    obj.skill.name = 'design' // effect!

    // If you want "obj.skill.name = 'design'" not effect, you must : Object.freeze(obj.skill);;
}
//=================================================================================================


//=================================== Knowledge Point : 解构赋值 ===================================
//1, Array
{
    let arr = [1, 2, 3];
    let [a, b, c] = [...arr]; // a = 1, b = 2, c = 3

    let [a1, a2, a3, a4] = [1, 2, [3, 4]];
    // a1 = 1 / a2 = 2 / a3 = [3, 4] / a5 undefine
}

//2, Object
{
    let user = {
        name: 'xiecheng',
        age: 34
    }

    let { age, name } = user; // mapping by key, not sorting
    //console.log(name);// xiecheng
    //console.log(age); // 34

    let { age: uage, name: uname } = user; // mapping with alias key, so age here change to uage
    //console.log(uname);
    //console.log(uage);
}

//3, String
{
    let str = 'vincent';
    let [a, b, c, d, e, f, g] = str;
    //console.log(g);
}

{
    function foo([a, b, c]) {
        //console.log(a, b, c);
    }

    let arr = [1, 2, 3];

    foo(arr);

}
//=================================================================================================







//=================================== Knowledge Point : Array =====================================

{
    let arr = [1, 2, 3, 2, 4];

    arr.forEach(function(elem, index, array) {
        //console.log(elem, index, array);
    });

    let result = arr.map(function(value) {
        return value + 1;
    });

    result = arr.filter(function(value) {
        return value == 2
    })

    result = arr.some(function(value) {
        return value == 4;
    })
    console.log(result);
}

//=================================================================================================