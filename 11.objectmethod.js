//http://es6.ruanyifeng.com/#docs/object-methods

//Object.is
{
    //ES5 比较两个值是否相等，只有两个运算符：相等运算符（==）和严格相等运算符（===）。它们都有缺点，前者会自动转换数据类型，后者的NaN不等于自身，以及+0等于-0。JavaScript 缺乏一种运算，在所有环境中，只要两个值是一样的，它们就应该相等。
    // console.log(+0 === -0);//true
    // console.log(Object.is(+0,-0));//false

    // console.log(NaN === NaN);//false
    // console.log(Object.is(NaN,NaN));//true
}



//Object.assign
{
    {
        //Object.assign方法用于对象的合并，将源对象（source）的所有可枚举属性，复制到目标对象（target）。
        const target = {a:1};
        const source1 = {b:2};
        const source2 = {c:3};

        Object.assign(target, source1, source2);
        // console.log(target);//{ a: 1, b: 2, c: 3 }

        // console.log(Object.is(Object.assign(target), target));//true
    }

    {
        const v1 = 'orange';
        const v2 = true;
        const v3 = 10;

        const obj = Object.assign({}, v1, v2, v3);
        // console.log(obj); // { '0': 'o', '1': 'r', '2': 'a', '3': 'n', '4': 'g', '5': 'e' }
    }

    {
        const target = Object.assign([1, 2, 3], [4, 5]);
        // console.log(target);//[ 4, 5, 3 ]
    }

    /**
     * Object.assign 的最佳用法
     */
    {
        Object.assign(String.prototype, {
            method1() {
                return "this is method1";
            },
            method2() {
                return "this is method2";
            }
        });

        String.prototype.method3 = function() {
            return "this is method3";
        };

        String.prototype.method4 = function() {
            return "this is method4";
        };

        let xyx = String("123");

        // console.log(xyx.method1());
        // console.log(xyx.method2());
        // console.log(xyx.method3());
        // console.log(xyx.method4());
    }

    {
        let parentRef = {
            att1: "att1 value"
        };

        let childRef = {
            att2: 'att2 value',
            find() {//注意，super关键字表示原型对象时，只能用在对象的方法之中，用在其他地方都会报错。
                return super.foo;
            }
        };

        Object.setPrototypeOf(childRef, parentRef);

        /**
         att2
         find
         */
        let keyArrays = Object.keys(childRef);
        for (let index of keyArrays) {
            // console.log(index);
        }

        /**
         att2
         find
         */
        let keyStrings = Object.getOwnPropertyNames(childRef);
        for (let index of keyStrings) {
            // console.log(index);
        }

        /**
         att2
         find
         */
        Reflect.ownKeys(childRef).forEach(function (item) {
            // console.log(item);
        })

        /**
         *
         * 唯一可以做到loop 包括继承的
         *
         att2:string
         find:function
         att1:string
         */
        for (let attributeName in childRef) {
            // console.log(Object.getOwnPropertyDescriptor(childRef, attributeName));
            // console.log(attributeName + ":" + typeof childRef[attributeName]);
        }

        /**
         * Object.assign 只能copy 自己的
         att2:string
         find:function
         */
        let targetRef = Object.assign({}, childRef);
        for (let attributeName in targetRef) {
            // console.log(attributeName + ":" + typeof targetRef[attributeName]);
        }

        /**
         * 以下可以解决深层次问题
         att2:string
         find:function
         att1:string
         */
        function cloneObject(source) {
            let originProto = Object.getPrototypeOf(source);
            return Object.assign(Object.create(originProto), source);
        }
        let targetRef2 = cloneObject(childRef);
        for (let attributeName in targetRef2) {
            console.log(attributeName + ":" + typeof targetRef2[attributeName]);
        }
    }
}
