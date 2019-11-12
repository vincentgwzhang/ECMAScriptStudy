var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
{
    //printLabel有一个参数，并要求这个对象参数有一个名为label类型为string的属性
    function printLabel(labelledObj) {
        console.log(labelledObj.label);
    }
    var myObj = { size: 10, label: "Size 10 Object" };
    printLabel(myObj);
}
{
    function createSquare(config) {
        var newSquare = { color: "white", area: 100 };
        if (config.color) {
            newSquare.color = config.color;
        }
        if (config.width) {
            newSquare.area = config.width * config.width;
        }
        return newSquare;
    }
    createSquare({ color: "blue", width: 100 });
}
{
    var mySearch = function (source, subString) {
        var result = source.search(subString);
        return result > -1;
    };
    var mySearch2 = function (src, sub) {
        var result = src.search(sub);
        return result > -1;
    };
    var mySearch3 = function (src, sub) {
        var result = src.search(sub);
        return result > -1;
    };
}
{
    var Animal = /** @class */ (function () {
        function Animal() {
        }
        return Animal;
    }());
    var Dog = /** @class */ (function (_super) {
        __extends(Dog, _super);
        function Dog() {
            return _super !== null && _super.apply(this, arguments) || this;
        }
        return Dog;
    }(Animal));
}
{
    var Clock = /** @class */ (function () {
        function Clock(h, m) {
        }
        Clock.prototype.setTime = function (d) {
            this.currentTime = d;
        };
        return Clock;
    }());
}
{
    var square = {};
    square.color = "blue";
    square.sideLength = 10;
}
{
    var square = {};
    square.color = "blue";
    square.sideLength = 10;
    square.penWidth = 5.0;
}
