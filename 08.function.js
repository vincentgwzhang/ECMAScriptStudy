//http://es6.ruanyifeng.com/#docs/function

{
    //ES6 允许为函数的参数设置默认值，即直接写在参数定义的后面。
    function log(x, y = 'World') {
        //console.log(x, y);
    }
}

{
    function push(array, ...items) {
        items.forEach(function(item) {
            array.push(item);
            //console.log(item);
        });
    }

    var a = [];
    push(a, 1, 2, 3);
}

{
    var f = v => v;

// 等同于
    var f = function (v) {
        return v;
    };
}