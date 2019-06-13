{
    for (let codePoint of 'foo') {
        //console.log(codePoint);
    }
}

{
    let text = String.fromCodePoint(0x20BB7);

    for (let i = 0; i < text.length; i++) {
        //console.log(text[i]);
    }
    for (let i of text) {
        //console.log(i);
    }
}

{
    //console.log(`123456   `.trim().length);
}

//内部计算
{
    let x = 1;
    let y = 2;
    //console.log(`${x} + ${y} = ${x + y}`);// "1 + 2 = 3"

    let obj = {x: 1, y: 2};
    //console.log(`${obj.x + obj.y}`);

    function fn() {
        return "Hello World";
    }
    //console.log(`foo ${fn()} bar`);//foo Hello World bar
}

{
    //alert`123`
// 等同于
    //alert(123)
}

{
    //console.log('x'.padStart(5, 'ab'));//ababx
    //console.log('x'.padEnd(5, 'ab'));//xabab
}