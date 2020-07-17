function f1() {
    console.log(arguments);
}
f1(1,2,3);


/**
 *
 * REST 参数, 必须要放最后
 */
function f2(...args) {
    console.log(args);
}

f2(7,8,9);
