//http://es6.ruanyifeng.com/#docs/class

{
    class Point {
        constructor(x, y) {
            this.x = x;
            this.y = y;
        }
    }

    class ColorPoint extends Point {
        constructor(x, y, color) {
            //this.color = color; // ReferenceError
            super(x, y);
            this.color = color; // 正确
        }
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

    B.__proto__ === A // true
    B.prototype.__proto__ === A.prototype // true
}