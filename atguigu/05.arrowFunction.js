/**
 *
 * 跟普通函数不同的地方:
 *
 * 1, 用箭头函数的时候， this 始终指向函数声明时所在的作用域下 (注意，不是全局，是所在) 的this 的值
 * 2, 箭头函数不能作为构造函数
 * 3, 不能使用 arguments
 *
 */
{
    let fn = function () {

    };

    let f2 = (a, b) => {
        return a + b;
    };

    //console.log(f2(3, 4));
}


{
    function getName() {
        console.log(this.name);
    }

    let getName2 = () => {
        console.log(this.name);
    }

    const school = {
        name: 'bbb'
    };

    //getName.call(school); // 这个原本也是指向全局作用域下的name的，但是由于用了call，导致指向变成 school 的name
    //getName2.call(school);// 这个是undefine, 因为声明 getName2 的时候, 用的是箭头符号，所以一定会一直指向全局作用域下的 name
}

{
    let p1 = () => {};
    // let object1 = new p1(); //TypeError: p1 is not a constructor
    let p2 = function () {

    };

    let object2 = new p2();
}

{
    let f1 = () => {
        //console.log(arguments); // 不能使用 arguments
    };

    f1();

    let f2 = function () {
        //console.log(arguments);
    }

    f2();
}

{
    // 当形参只有一个的时候可以不用小括号
    let f1 = b => {console.log(b);};

    // 当代码体只有一句的时候可以同时去掉花括号和 return
    let f2 = b => b * b;
    // console.log(f2(2));
}
