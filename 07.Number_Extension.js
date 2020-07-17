//http://es6.ruanyifeng.com/#docs/number

{
    // console.log(Number(0b1110));//二进制
    // console.log(Number(0o111));//八进制
}

{
    // console.log(Number.isFinite(15));//检查是不是常数.数字
    // console.log(Number.isFinite("AAAs"));//检查是不是常数.数字
    // console.log(Number.isFinite(true));//检查是不是常数.数字
    // console.log(Number.isFinite(NaN));//检查是不是常数.数字
}

{
    // console.log(Number.parseInt('12.34')); // 12
    // console.log(Number.parseFloat('123.45#')); // 123.45
}

{
    // console.log(Number.isInteger(15));
    // console.log(Number.isInteger(3.0000000000000002));//3后面有16位，如果是15位就会计算在内得了
    /**
     * 上面代码中，Number.isInteger的参数明明不是整数，但是会返回true。原因就是这个小数的精度达到了小数点后16个十进制位，
     * 转成二进制位超过了53个二进制位，导致最后的那个2被丢弃了。
     */
}

{
    //console.log(3+986);
    //console.log(0.1+0.2);//0.30000000000000004
    function withinErrorMargin (left, right) {
        return Math.abs(left - right) < Number.EPSILON;
    }
    //console.log(withinErrorMargin(0.1 + 0.2, 0.3));
    //console.log(withinErrorMargin(1.1 - 0.2, 0.9));
}

{
    // console.log(Number.MIN_SAFE_INTEGER);//-9007199254740991
    // console.log(Number.MAX_SAFE_INTEGER);//9007199254740991
    // console.log(Number.isSafeInteger(Number.MIN_SAFE_INTEGER)==true);
    // console.log(Number.isSafeInteger(Number.MAX_SAFE_INTEGER)==true);
}
/**
 *
 * 记得，对于所有得Number 得函数，true, false, null 都是有得就得，不会变成NaN
 *
 *
 *
 */
{
    //Math.trunc方法用于去除一个数的小数部分，返回整数部分。
    // console.log(Math.trunc('123.456'));// 123
    // console.log(Math.trunc(true));//1
    // console.log(Math.trunc(false)); // 0
    // console.log(Math.trunc(null)); // 0

    // console.log(Math.trunc(NaN));      // NaN
    // console.log(Math.trunc('foo'));    // NaN
    // console.log(Math.trunc());         // NaN
    // console.log(Math.trunc(undefined)); // NaN
}

{
    //Math.sign()
    /**
     * 参数为正数，返回+1；
     参数为负数，返回-1；
     参数为 0，返回0；
     参数为-0，返回-0;
     其他值，返回NaN。
     */
}

{
    //console.log(2 ** 2);//2^2
    //console.log(2 ** 3);//2^3

    let a = 5;
    a **= 2;
    //console.log(a);//5^2
}

{
    console.log(parseInt("afefe"));
}
