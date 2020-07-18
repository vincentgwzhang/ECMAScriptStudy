const fs = require('fs');
/**
 * 
 * 1, async 和 await
 * 
 * async 函数返回值为 promise 对象
 * promise 对象的结果由async 
 * 
 * 
 * 
 */


{

    function readText1() {
        return new Promise((resolve, reject) => {
            fs.readFile('/home/vzhang/workspace/self/ECMAScriptStudy/atguigu/text1.text', (err, data) => {
                resolve(data);
            });
        });
    }

    function readText2() {
        return new Promise((resolve, reject) => {
            fs.readFile('/home/vzhang/workspace/self/ECMAScriptStudy/atguigu/text1.text', (err, data) => {
                resolve(data);
            });
        });
    }

    function readText3() {
        return new Promise((resolve, reject) => {
            fs.readFile('/home/vzhang/workspace/self/ECMAScriptStudy/atguigu/text1.text', (err, data) => {
                resolve(data);
            });
        });
    }

    /**
     * 等待完成 readText1, 然后运行 readText2 ...
     */
    async function main() {
        let text1 = await readText1();
        let text2 = await readText2();
        let text3 = await readText3();

        console.log(text1.toString());
        console.log(text2.toString());
        console.log(text3.toString());
    }

    // main();
}

{
    let school = {
        name1: 'value1',
        name2: 'value2',
        name3: 'value3',
    };

    // console.log(Object.keys(school));
    // console.log(Object.values(school));
    // console.log(Object.entries(school));
    let map = new Map(Object.entries(school));
    //console.log(map.get('name2'));
}

{
    const obj = Object.create(null, {
        name: {
            value: 'value1'
        }
    });
}