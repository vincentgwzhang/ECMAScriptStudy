{

    //printLabel有一个参数，并要求这个对象参数有一个名为label类型为string的属性
    function printLabel(labelledObj: {label: string}) {
        console.log(labelledObj.label);
    }

    let myObj = {size: 10, label: "Size 10 Object"};
    printLabel(myObj);

}

{
    interface SquareConfig {
        color?: string;
        width?: number;
    }

    interface shade {
        color: string;
        area: number
    }

    function createSquare(config: SquareConfig): shade {
        let newSquare = {color: "white", area: 100};
        if (config.color) {
            newSquare.color = config.color;
        }
        if (config.width) {
            newSquare.area = config.width * config.width;
        }
        return newSquare;
    }

    createSquare({color: "blue", width:100});
}

{
    interface SearchFunc {
        (source: string, subString: string): boolean;
    }

    let mySearch: SearchFunc = function(source: string, subString: string) {
        let result = source.search(subString);
        return result > -1;
    };

    let mySearch2 : SearchFunc = function(src: string, sub: string): boolean {
        let result = src.search(sub);
        return result > -1;
    };

    let mySearch3 : SearchFunc = (src, sub) => {
        let result = src.search(sub);
        return result > -1;
    }
}

{
    class Animal {
        name: string;
    }
    class Dog extends Animal {
        breed: string;
    }
}

{
    interface ClockInterface {
        currentTime: Date;
        setTime(d: Date);
    }

    class Clock implements ClockInterface {
        currentTime: Date;
        setTime(d: Date) {
            this.currentTime = d;
        }
        constructor(h: number, m: number) { }
    }
}

{
    interface Shape {
        color: string;
    }

    interface Square extends Shape {
        sideLength: number;
    }

    let square = <Square>{};
    square.color = "blue";
    square.sideLength = 10;
}

{
    interface Shape {
        color: string;
    }

    interface PenStroke {
        penWidth: number;
    }

    interface Square extends Shape, PenStroke {
        sideLength: number;
    }

    let square = <Square>{};
    square.color = "blue";
    square.sideLength = 10;
    square.penWidth = 5.0;
}
