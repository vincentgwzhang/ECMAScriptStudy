//顶层对象，在浏览器环境指的是window对象，在 Node 指的是global对象。ES5 之中，顶层对象的属性与全局变量是等价的。

//console.log(window); 这个应该只能够在


/**
 1. 浏览器里面，顶层对象是window，                  (但 Node 和 Web Worker 没有window。)
 2. 浏览器和 Web Worker 里面，self也指向顶层对象，但是 Node 没有self。
 3. Node 里面，顶层对象是global，但其他环境都不支持。

 浏览器: window, self
 Web Worker: self
 Node:  global
 */

var getGlobal = function () {
    if (typeof self !== 'undefined') { return self; }
    if (typeof window !== 'undefined') { return window; }
    if (typeof global !== 'undefined') { return global; }
    throw new Error('unable to locate global object');
};

console.log(getGlobal().process.title);