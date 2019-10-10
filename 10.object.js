//http://es6.ruanyifeng.com/#docs/object

//1, 属性的简洁表示法
{
    {
        function fun1(x, y) {return {x, y};}
        // 等同于
        function fun2(x, y) {return {x: x, y: y};}

        let value1 = fun1(1, 2);
        let value2 = fun2(1, 2);
        // console.log(value1.x === value2.x);//true
        // console.log(value1.y === value2.y);//true
    }

    {
        let birth = '2000/01/01';
        const Person = {
            name: '张三',
            //等同于birth: birth
            birth,
            // 等同于hello: function ()...
            hello() { console.log('我的名字是', this.name); }
        };

        // console.log(Person.hello());//我的名字是 张三
    }
}





//2, 属性名表达式
{
    //class == array?
    {
        let lastWord = 'last word';
        const a = {
            'first word': 'hello',
            [lastWord]: 'world'
        };
        // console.log(a['first word']);//hello
        // console.log(a[lastWord]);//world
        // console.log(a['last word']);//world
    }

    {
        let obj = {
            ['h' + 'ello']() {
                return 'hi';
            }
        };

        // console.log(obj.hello());
    }
}

//3, 方法的name 属性
{
    {
        const person = {
            sayNameFunction1() {
                console.log('hello!');
            },
        };
        // console.log(person.sayNameFunction1.name);//sayNameFunction1
    }

    {
        const obj = {
            get foo() {},
            set foo(x) {}
        };

        // console.log(obj.foo.name);// TypeError: Cannot read property 'name' of undefined

        const descriptor = Object.getOwnPropertyDescriptor(obj, 'foo');

        // console.log(descriptor.get.name);// "get foo"
        // console.log(descriptor.set.name);// "set foo"
    }

    {
        // console.log((new Function()).name === "anonymous");//true
    }
}


//4, 属性的可枚举性和遍历
{
    {
        let obj = {
            foo: 123,
            att: "123",
            fun1() {
                return "fun1";
            }
        };
        // console.log(Object.getOwnPropertyDescriptor(obj, 'fun1'));
        /**
         * {
         *      value: [Function: fun1],
                writable: true,
                enumerable: true,
                configurable: true
            }
         */

        // console.log(Object.getOwnPropertyNames(obj));//[ 'foo', 'att', 'fun1' ]


    }

    {
        //ES6 规定，所有 Class 的原型的方法都是不可枚举的。
        //console.log(Object.getOwnPropertyDescriptor(class {foo() {}}.prototype, 'foo'));
        /**
         {
            value: [Function: foo],
            writable: true,
            enumerable: false,
            configurable: true
         }
         */
    }
}

//5, 属性的遍历
{
    /**
     （1）for...in
     （2）Object.keys(obj)
     （3）Object.getOwnPropertyNames(obj)
     （4）Object.getOwnPropertySymbols(obj)
     （5）Reflect.ownKeys(obj)
     */

    let obj = {
        att1: 123,
        att2: "456",
        fun3() {
            return "fun1";
        }
    };

    {
        // for...in循环遍历对象自身的和继承的可枚举属性
        for (let key in obj) {
            // console.log(key + ":" + obj[key]);
        }
    }

    {
        // Object.keys(obj) 返回一个数组，包括对象自身的（不含继承的）所有可枚举属性（不含 Symbol 属性）的键名。
        // By the way, study array loop
        let arrayKeys = Object.keys(obj);

        /**
         0:att1:number
         1:att2:string
         2:fun3:function
         */
        for (let key in arrayKeys) {
            // console.log(key + ":" + arrayKeys[key] + ":" + typeof obj[arrayKeys[key]]);
        }

        /**
         0:att1:number
         1:att2:string
         2:fun3:function
         */
        arrayKeys.forEach(function(item, index){
           // console.log(index + ":" + item + ":" + typeof obj[item]);
        });

        /**
         0:att1:number
         1:att2:string
         2:fun3:function
         */
        for (let key = 0; key < arrayKeys.length; key++) {
            // console.log(key + ":" + arrayKeys[key] + ":" + typeof obj[arrayKeys[key]]);
        }

        /**
         att1:number
         att2:string
         fun3:function
         */
        for (let key of arrayKeys) {
            // console.log(key + ":" + typeof obj[key]);
        }

        //speed compare: for > for-of > forEach > filter > map > for-in
    }
}

//5, super-关键字
{
    {
        const proto = {
            foo: 'hello'
        };

        const obj = {
            foo: 'world',
            find() {
                return super.foo;
            }
        };

        Object.setPrototypeOf(obj, proto);
        // console.log(obj.find()); // "hello"
    }

    {
        const proto = {
            x: 'hello',
            foo() {
                console.log(this.x);
            },
        };

        const obj = {
            x: 'world',
            foo() {
                super.foo();
            }
        };

        Object.setPrototypeOf(obj, proto);

        //obj.foo(); // "world"
    }
}

//6, 扩展运算符
{

    {
        let z = { a: 3, b: 4 };
        let n = { ...z };
        //console.log(n.a + ":" + n.b);n // { a: 3, b: 4 }
    }

    {
        let foo = { ...['a', 'b', 'c'] };
        // console.log(foo);//{ '0': 'a', '1': 'b', '2': 'c' }
    }

    {
        //扩展运算符后面是整数1，会自动转为数值的包装对象Number{1}。由于该对象没有自身属性，所以返回一个空对象。
        // console.log({...1});//{}
        // console.log({...true});//{}
        // console.log({...undefined});//{}
        // console.log({...null});//{}
    }

    {
        let arr = {...'hello'};
        // console.log(arr);//{ '0': 'h', '1': 'e', '2': 'l', '3': 'l', '4': 'o' }
    }

    {
        const obj = {
            x: 'hello',
            foo() {
                console.log(this.x);
            },
        };

        // 写法一
        const clone1 = {
            __proto__: Object.getPrototypeOf(obj),
            ...obj
        };
        // console.log(clone1);//{ x: 'hello', foo: [Function: foo] }

        // 写法二
        const clone2 = Object.assign(
            Object.create(Object.getPrototypeOf(obj)),
            obj
        );
        // console.log(clone2);//{ x: 'hello', foo: [Function: foo] }

        // 写法三
        const clone3 = Object.create(
            Object.getPrototypeOf(obj),
            Object.getOwnPropertyDescriptors(obj)
        )
    }
}