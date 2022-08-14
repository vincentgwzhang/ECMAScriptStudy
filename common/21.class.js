//http://es6.ruanyifeng.com/#docs/class
//http://es6.ruanyifeng.com/#docs/class-extends

{
    {
        function Point(x, y) {
            this.x = x;
            this.y = y;
        }

        Point.prototype.toString = function () {
            return '(' + this.x + ', ' + this.y + ')';
        };

        let p = new Point(1, 2);
        // console.log(p.toString());
    }
}


{


    {
        class Point {
            constructor(x, y) {
                this.x = x;
                this.y = y;
            }

            toString() {
                return "(this.x = " + this.x + ", this.y = " + this.y + ")";
            }

            showme(yPoint) {
                return new Point(yPoint.x + this.x, yPoint.y + this.y);
            }

            static staticMethod() {
                return 'static method';
            }
        }

        class ColorPoint extends Point {
            constructor(x, y, color) {
                //this.color = color; // ReferenceError
                super(x, y);
                this.color = color; // 正确
            }
        }

        let xPoint = new Point(3, 5);
        let zPoint = xPoint.showme(new ColorPoint(5, 6));
        //console.log(zPoint.toString());

        //类本身就指向构造函数。
        // console.log(Point === Point.prototype.constructor);//true

        //类的数据类型就是函数，
        // console.log(typeof Point);//function
        //console.log(Point.prototype.constructor);//[Function: Point]

        // Point 就是 Point 上面的函数
        // 由于constructor 是唯一的，因此 Point.prototype.constructor === Point === zPoint.constructor
        // console.log(Point === Point.prototype.constructor);//true
        // console.log(zPoint.constructor === Point.prototype.constructor);//true
        // console.log(zPoint.constructor === Point);//true

        //通过额外方式添加类的函数成员的方法：
        //1,
        Object.assign(Point.prototype, {
            showFunction1() {
                return this.x;
            },

            showFunction2() {
                return this.y;
            }
        });

        //2,
        Point.prototype.showFunction3 = function () {
            return "Hello";
        };

        //3,
        zPoint.__proto__.showFunction4 = function () {
            return "Bye";
        }
        // console.log(zPoint.showFunction1());
        // console.log(zPoint.showFunction2());
    }


}



{
    class Car {
        constructor(prop1, prop2) {
            this.prop1 = prop1;
            this.prop2 = prop2;
        }

        printProperty1() {
            console.log(this.prop1);
        }

        printProperty2() {
            console.log(this.prop2);
        }

        printFullProperties () {
            console.log("Print full properties");
        }

        static staticMethod() {
            return "This is static method";
        }
    }

    let carObj = new Car("value1", "value2");

    function print(item, index) {
        console.log("index = [" + index + "], item = [" + item + "]");
    }

    //console.log(Car.staticMethod());
    //console.log(carObj.staticMethod());// 和 Java 不同，无法通过对象调用静态函数

    // Object.keys can not get anything, because class method is not emul
    Object.keys(Car.prototype).forEach(print);

    /**
     index = [0], item = [prop1]
     index = [1], item = [prop2]
     */
    //Object.keys(carObj).forEach(print);

    /**
     index = [0], item = [constructor]
     index = [1], item = [printProperty1]
     index = [2], item = [printProperty2]
     index = [3], item = [printFullProperties]
     */
    //Object.getOwnPropertyNames(Car.prototype).forEach(print);

    /**
     index = [0], item = [prop1]
     index = [1], item = [prop2]
     */
    // Object.getOwnPropertyNames(carObj).forEach(print);

    /**
     index = [0], item = [constructor]
     index = [1], item = [printProperty1]
     index = [2], item = [printProperty2]
     index = [3], item = [printFullProperties]
     */
    // Reflect.ownKeys(Car.prototype).forEach(print);

    /**
     * Get nothing
     */
    for (let item in Car.prototype) {
        console.log(item);
    }

    /**
     prop1
     prop2
     */
    for (let item in carObj) {
        //console.log(item);
    }

    //of 只存在于Array
    for (let item of Object.values(carObj)) {
        //console.log(item);
    }

    /**
     index = [0], item = [constructor]
     index = [1], item = [printProperty1]
     index = [2], item = [printProperty2]
     index = [3], item = [printFullProperties]
     */
    //Object.getOwnPropertyNames(carObj.__proto__).forEach(print);

    {
        //原型对象
        //console.log(carObj.__proto__ === Car.prototype);//true
        //A New Function!!!
        carObj.__proto__.function1 = function () {
            console.log("A New Function");
        };

        let anotherCar = new Car("value21", "value22");
        //anotherCar.function1();
    }
}










{
    //Object.getPrototypeOf(ColorPoint) === Point
}

{
    //子类的__proto__属性，表示构造函数的继承，总是指向父类。
    //子类prototype属性的__proto__属性，表示方法的继承，总是指向父类的prototype属性。
    class A {
    }

    class B extends A {
    }

    // console.log(B.__proto__ === A) // true
    // console.log(B.prototype.__proto__ === A.prototype) // true
}

{
    //Anonymous class
    let person = new class {
        constructor(name) {
            this.name = name;
        }

        sayName() {
            console.log(this.name);
        }
    }('张三');

    //person.sayName(); // "张三"
}

{
    class Foo {
        constructor(...args) {
            this.args = args;
        }

        * [Symbol.iterator]() {
            for (let arg of this.args) {
                yield arg;
            }
        }
    }

    for (let x of new Foo('hello', 'world')) {
        //console.log(x);
    }
}

{
    //父类的静态方法，可以被子类继承。
    class Foo {
        static classMethod() {
            return 'hello';
        }
    }

    class Bar extends Foo {
    }

    // console.log(Bar.classMethod()) // 'hello'
}

{
    //静态方法也是可以从super对象上调用的。
    class Foo {
        static classMethod() {
            return 'hello';
        }
    }

    class Bar extends Foo {
        static classMethod() {
            return super.classMethod() + ', too';
        }
    }

}

{
    class GetterSetterClass {
        constructor(x, y) {
            this.x = x;
            this.y = y;
        }

        get value() {
            return this.x + 1;
        }

        set value(_value) {
            this.x = _value;
        }
    }

    let objForTest = new GetterSetterClass(1,2);
    objForTest.value = 12;
    // console.log(objForTest.value);//13
}

{
    // 实现了 Abstract class!
    class Shape {
        constructor() {
            // console.log(new.target.length);//3, this 3 stand for child instance has 3 properties: length, width, prop
            // console.log(new.target.prototype);
            // console.log(new.target.name);

            if (new.target === Shape) { //子类继承父类时，new.target会返回子类。
                throw new Error('本类不能实例化');
            }
        }
    }

    class Rectangle extends Shape {
        constructor(length, width, prop) {
            super();
            this.length = length;
            this.width = width;
            this.prop = prop;
        }
    }

    let xRectangle = new Rectangle(12,24);
    //let xShape = new Shape();

}

{
    class A {
        constructor() {
            this.x = 1;
        }
        print() {
            console.log(this.x);
        }
    }

    class B extends A {
        constructor() {
            super();
            this.x = 2;
        }
        m() {
            super.print();
        }
    }

    let b = new B();
    //b.m(); // 2
}


{
    class A {
        constructor() {
            this.x = 1;
        }
        static print() {
            console.log(this.x);
        }
    }

    class B extends A {
        constructor() {
            super();
            this.x = 2;
        }
        static m() {
            super.print();
        }
    }

    B.x = 3;
    //B.m(); // 3
    // console.log(B.__proto__ === A);
    // console.log(B.prototype.__proto__ === A.prototype);
    // console.log(typeof A.__proto__);//function
    // console.log(typeof B.__proto__);//function
    // console.log(typeof B.prototype);//object
    // console.log(typeof B.prototype.__proto__);//object
    // console.log(typeof A.prototype);//object
}

{
    class A {
        function_from_A() {
            console.log("function_from_A running");
        }

        static static_function_from_A() {
            console.log("static_function_from_A running");
        }
    }

    class B {
        function_from_B() {
            console.log("function_from_B running");
        }

        static static_function_from_B() {
            console.log("static_function_from_B running");
        }
    }

    // B 的实例继承 A 的实例
    Object.setPrototypeOf(B.prototype, A.prototype);// == B.prototype.__proto__ = A.prototype;

    // B 继承 A 的静态属性
    Object.setPrototypeOf(B, A);// == B.__proto__ = A;

    const b = new B();
    // b.function_from_A();
    // B.static_function_from_B();
    // B.static_function_from_A();
}
