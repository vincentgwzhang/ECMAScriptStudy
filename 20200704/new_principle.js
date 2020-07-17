/**
 * new 的本质是什么
 */

function create(Con, ...args){
    // 创建一个空的对象
    this.obj = {};

    // 将空对象指向构造函数的原型链
    Object.setPrototypeOf(this.obj, Con.prototype);

    // obj绑定到构造函数上，便可以访问构造函数中的属性，即this.obj.Con(args)
    let result = Con.apply(this.obj, args);

    // 如果返回的result是一个对象则返回
    // new方法失效，否则返回obj
    return result instanceof Object ? result : this.obj;
}

class ClassA {
    constructor(x, y) {
        this.x = x;
        this.y = y;
    }

    toString() {
        return "x = [" + this.x + "], y = [" + this.y + "]";
    }
}

let createdObject = create(ClassA.class, 1, 2);
console.log(createdObject.toString());
