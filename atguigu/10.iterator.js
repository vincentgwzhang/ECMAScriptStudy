/**
 可以使用 for of 的有
 Array
 Arguments
 Set
 Map
 String
 TypeArray
 NodeList
 */


{
    const xiyou = ['A','B','C','D'];

    for (let v of xiyou) {
        // console.log(v);
    }


    let iterator = xiyou[Symbol.iterator](); // iterator !!!
    //console.log(iterator.next()); // { value: 'A', done: false }

}


{
    const ccc = {
        name: 'fefef',
        stus: [
            'a',
            'b',
            'c',
            'd',
        ],
        [Symbol.iterator]() {// 实现 iterator 接口
            let index = 0;
            let _this = this;
            return {
                next: function () {
                    let isDone = false;
                    if (index === _this.stus.length) {
                        isDone = true;
                    }
                    return {
                        value: _this.stus[index++],
                        done: isDone
                    };
                }
            };
        }
    };

    for (let key of ccc) {
        console.log(key);
    }
}
