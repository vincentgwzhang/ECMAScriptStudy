/**
 *
 *resolve函数的作用是，将Promise对象的状态从“未完成”变为“成功”（即从 pending 变为 resolved），在异步操作成功时调用，并将异步操作的结果，作为参数传递出去；
 * reject函数的作用是，将Promise对象的状态从“未完成”变为“失败”（即从 pending 变为 rejected），在异步操作失败时调用，并将异步操作报出的错误，作为参数传递出去。
 *
 *
 */



/**
 *
 * Sample 1
 *
setTimeout(function () {
    console.log('Hello');
    setTimeout(function () {
        console.log('Hi');
    }, 1000);
}, 1000);
*/


/**
 *
 * Sample 2
 *
function timeout(ms) {
    return new Promise((resolve, reject) => {
        setTimeout(resolve, ms, 'done');
    });
}

timeout(100).then(
    (value) => {console.log(value);}
);
 */


/**
 * Sample 3,
 * 1, 下面代码中，Promise 新建后立即执行，所以首先输出的是Promise。
 * 2, 然后，then方法指定的回调函数，将在当前脚本所有同步任务执行完才会执行，所以resolved最后输出。
 *
let promise = new Promise(function (resolve, reject) {
    console.log('Promise');
    resolve();
});
promise.then(function () {
    console.log('resolved.');
});
console.log('Hi!');
 */


/**
 *
 * Sample 4
 *
const getJSON = function (url) {
    const promise = new Promise(function (resolve, reject) {
        const handler = function () {
            if (this.readyState !== 4) {
                return;
            }
            if (this.status === 200) {
                resolve(this.response);
            } else {
                reject(new Error(this.statusText));
            }
        };
        const client = new XMLHttpRequest();
        client.open("GET", url);
        client.onreadystatechange = handler;
        client.responseType = "json";
        client.setRequestHeader("Accept", "application/json");
        client.send();
    });
    return promise;
};

getJSON("/posts.json").then(
    function (json) {
        console.log('Contents: ' + json);
        },
    function (error) {
        console.error('Error', error);
});
*/

const p1 = new Promise(function (resolve, reject) {
    console.log("==================P1:Begin=====================");
    setTimeout(() => reject(new Error('fail')), 3000);
    console.log("==================P1:End=====================");
});

const p2 = new Promise(function (resolve, reject) {
    console.log("==================P2:Begin=====================");
    setTimeout(() => resolve(p1), 1000);
    console.log("==================P2:End=====================");
});

p2
    .then(result => {console.log("========1=======Begin");console.log(result);console.log("========1=======End");})
    .catch(error => {console.log("========2=======Begin");console.log(error);console.log("========2=======End");});



















