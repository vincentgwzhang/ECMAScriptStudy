const fs = require('fs');

// fs.readFile('text1.text', (err, data) => {
//     if (err) throw err;
//     console.log(data.toString());
// });

// 下面使用 promise 封装
{
    const p = new Promise(function(resolve, reject) {
        fs.readFile('/home/vzhang/workspace/self/ECMAScriptStudy/atguigu/text1.text', (err, data) => {
            if (err) reject('error during read file');
            resolve(data.toString());
        });
    });

    p.then(value => {
        console.log('read success !!');
        console.log(value);
    }, reason => {
        console.log('read fail !!');
        console.log(reason);
    });

}

// 使用 Promise 实现