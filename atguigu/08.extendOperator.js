{
    const tfboys = ['yyqx','wy','wjk'];

    function chunwan() {
        console.log(arguments);
    }

    chunwan(tfboys);// 一个参数
    chunwan(...tfboys);//3个参数

}

{
    const kuaizi1 = ['a','b'];
    const kuaizi2 = ['c','d'];

    const mergeArray = [...kuaizi1, ...kuaizi2];
}

{
    const a1 = ['1','2','3'];
    const a2 = [...a1];// 浅拷贝
}
