//http://es6.ruanyifeng.com/#docs/class

{
    class Point {
        constructor(x, y) {
            this.x = x;
            this.y = y;
        }

        // get x() {
        //     //return x; 不能这样，否则会出现stack over flow，这里只是作为AOP 拦截行为
        //     //以后凡是调用 zPointer.x 就会只返回 'hello2'
        //     return 'hello 2';
        // }
        //
        // set x(x) {
        //     //this.x = x; 不能这样，否则会出现stack over flow，这里只是作为AOP 拦截行为
        // }
        //
        // get y() {
        //     return 'hello 3';
        // }
        //
        // set y(y) {
        //
        // }

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
    //console.log(Point === Point.prototype.constructor);

    // Point 就是 Point 上面的函数
    //console.log(Point.prototype.constructor);//[Function: Point]
    //console.log(zPoint.constructor===Point.prototype.constructor);//[Function: Point]

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
    Point.prototype.showFunction3 = function() {
        return "Hello";
    };

    //3,
    zPoint.__proto__.showFunction4 = function () {
        return "Bye";
    }

    //console.log(zPoint.showFunction1());
    //console.log(zPoint.showFunction2());

    //仅或去assign 得来的方法
    //Object.keys(Point.prototype).forEach(x => console.log(x));

    //获取所有的函数方法名
    //Object.getOwnPropertyNames(Point.prototype).forEach(x=> console.log(x));
    //Object.getOwnPropertyNames(zPoint).forEach(x=> console.log(x));//x, y
    //Object.getOwnPropertyNames(zPoint.__proto__).forEach(x=> console.log(x));//x, y

    //console.log(zPoint instanceof Point);

    //console.log(Point.prototype.hasOwnProperty("showFunction3"));//true, 因为 showFunction3 就是 Point 类的属性
    //console.log(Point.prototype.hasOwnProperty("showFunction3"));//true, 因为 showFunction3 就是 Point 类的属性
    console.log(Point.prototype.hasOwnProperty("staticMethod"));
    //console.log(Point.prototype.hasOwnProperty("x")); // false, 因为这个 x 是属于实例的
    //console.log(zPoint.hasOwnProperty("x")); // true, 因为这个 x 是属于实例的

    //console.log(zPoint.__proto__.hasOwnProperty("showFunction3"));// zPoint.__proto__ 代表的的是 Point
    //console.log(zPoint.__proto__ === Point.prototype);

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

    B.__proto__ === A // true
    B.prototype.__proto__ === A.prototype // true
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
    class Shape {
        constructor() {
            if (new.target === Shape) { //子类继承父类时，new.target会返回子类。
                throw new Error('本类不能实例化');
            }
        }
    }

    class Rectangle extends Shape {
        constructor(length, width) {
            super();
            // ...
        }
    }

}