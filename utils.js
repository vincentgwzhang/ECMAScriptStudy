// console.log(Math.floor(7.6));//7 --> 无论什么时候都是变成integer
// console.log(Math.round(7.6));//8
// console.log(Math.round(7.4));//7

{
    function createPhoneNumber(numbers){
        let str = numbers.join("");
        return str.replace(/(\d{3})(\d{3})(\d{4})/,'($1) $2-$3');
    }
    // console.log(createPhoneNumber([1, 2, 3, 4, 5, 6, 7, 8, 9, 0]));//(123) 456-7890


    //把 A,E,I,O,U 每一个字母全部删除
    //g 代表 global
    //i 代表 case not sensitive
    function disemvowel(str) {
        return str.replace(/[aeiou]/gi, '');
    }

    function maskify(cc) {
        return cc.slice(0, -4).replace(/./g, '#') + cc.slice(-4);
    }
}