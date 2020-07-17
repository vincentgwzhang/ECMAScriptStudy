const fs = require('fs');

/**
 * 这里演示连续读取3个文件并且合并
 */
const p = new Promise(function(resolve, reject) {
    fs.readFile('/home/vzhang/workspace/self/ECMAScriptStudy/atguigu/text1.text', (err, data) => {
        resolve(data);
    });
});

p.then(
    value => {
        return new Promise((resolve, reject) => {
            fs.readFile('/home/vzhang/workspace/self/ECMAScriptStudy/atguigu/text1.text', (err, data) => {
                resolve([value, data]);
            });
        })
    }
).then(
    value => {
        return new Promise((resolve, reject) => {
            fs.readFile('/home/vzhang/workspace/self/ECMAScriptStudy/atguigu/text1.text', (err, data) => {
                value.push(data);
                resolve(value);
            });
        })
    }
).then(
    value => {
        console.log(value.join('\r\n'));
    }
);


console.log('Everything finish, but I will show on first line');