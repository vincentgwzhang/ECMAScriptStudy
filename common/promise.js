/**
 *
 *resolve函数的作用是，将Promise对象的状态从“未完成”变为“成功”（即从 pending 变为 resolved），在异步操作成功时调用，并将异步操作的结果，作为参数传递出去；
 * reject函数的作用是，将Promise对象的状态从“未完成”变为“失败”（即从 pending 变为 rejected），在异步操作失败时调用，并将异步操作报出的错误，作为参数传递出去。
 *
 *
 * 1, 构建 Promise 对象时，需要传入一个 executor 函数，主要业务流程都在 executor 函数中执行。
 * 2, Promise构造函数执行时立即调用executor 函数， resolve 和 reject 两个函数作为参数传递给executor，resolve 和 reject 函数被调用时，
 * 分别将promise的状态改为fulfilled（完成）或rejected（失败）。一旦状态改变，就不会再变，任何时候都可以得到这个结果。
 * 3, 在 executor 函数中调用 resolve 函数后，会触发 promise.then 设置的回调函数；而调用 reject 函数后，会触发 promise.catch 设置的回调函数。
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

/**
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
*/

/**
let p1 = new Promise((resolve,reject)=>{
    console.log(1);
    //resolve('浪里行舟');
    reject(new Error('[throw out an exception message]'));
    console.log(2);
})
p1.then(
    result=>{console.log('成功 '+result);},//resolve 的时候调用
    reason=>{console.log('失败 '+reason);} //reason  出错的时候调用（但是不是exception）
).catch(
    error=> {console.log('Fail '+error);});//reject 出现exception的时候调用
console.log(3);
*/

function executor (resolve, reject) {
    let rand = 0.6;
    console.log("============executor=================");
    if (rand > 0.5) {
        resolve();
    } else {
        reject();
    }
}
var p0 = new Promise(executor)
var p1 = p0.then((value) => {
    console.log('succeed-1');
    return new Promise(executor);
})
var p2 = p1.then(
    (value) => {
        console.log('succeed-2');
        return new Promise(executor);
    },
    (reason) => {
        console.log('succeed-22');
        return new Promise(executor);
    })
p2.catch((error) => {
    console.log('error', error)
})
console.log(2)
















