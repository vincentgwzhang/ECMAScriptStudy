/**
 *
 * 1, 变量不能重复声明
 * 2, 注意作用域. 不会再出现 undefine, 而是直接 reference error
 *      console.log(ccccc); ===> 错误, 如果没有之后定义的 let, 就是默认的用 var ccccc;
 *      let ccccc = 1;
 * 3, var 无论什么时候都是全局作用域
 *
 */
