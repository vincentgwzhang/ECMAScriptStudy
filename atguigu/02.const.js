/**
 * 1, 常量声明一定要有赋予初始值
 * 2, const 数组是可以添加的
 *
 */
{
    const TEAM = ['A','B'];
    TEAM.push('C');
}


{
    const G1 = ['A','B','C','D'];
    let [A,B,C,D] = G1;
}

{
    const ZHAO = {// 这个一个对象， object
        name: 'name1',
        age: 12,
        f1: function () {
            console.log('AAA');
        }
    };

    let {name,age,f1} = ZHAO; // 一定要同名

    console.log(age);
}
