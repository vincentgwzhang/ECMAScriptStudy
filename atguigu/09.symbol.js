/**
 * Symbol 是一种类似字符串的类型, 不能参与运算
 *
 * 目前为止所有的数据类型
 * USONB:
 *
 * undefine
 * string
 * object
 * number
 * boolean
 * null
 *
 */

{
    // 创建 Symbol
    let s = Symbol();
    // console.log(s, typeof s);
}

{
    let s1 = Symbol('abc');
    let s2 = Symbol('abc');

    //console.log(s1 === s2);//false
}

{
    let s1 = Symbol.for('abv');
    let s2 = Symbol.for('abv');
    // console.log(s1 === s2);//true
}

{
    // 给对象添加属性和方法，是唯一的
    let game = {};

    let method = {
        up: Symbol(),
        down: Symbol()
    };

    game[method.up] = function () {
        console.log(1);
    }

    game[method.down] = function () {
        console.log(2);
    }
}

{
    let youxi = {
        name: 'name',
        [Symbol('say')]: function () {

        }
    };

}

{
    class Person {
        static [Symbol.hasInstance](param){
            console.log('AAAA');
            return true;
        }
    }

    let o = {};
    console.log(o instanceof Person);// 控制类型检测

}


{
    const arr = [1,2,3];
    const arr2 = [4,5,6];
    arr2[Symbol.isConcatSpreadable] = false;
    console.log(arr.concat(arr2)); // 于是只有4个元素，3个是 1,2,3, 第四个是 [4,5,6]，没有扁平化完全融入
}
