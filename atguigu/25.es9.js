{

    function connect({ host, port, ...rest }) {
        // console.log(host);
        // console.log(port);
        // console.log(rest);
    }

    connect({
        host: '127.0.0.1',
        port: 3306,
        username: 'root',
        password: 'root'
    });

}

{
    const obj1 = { key1: 'value1' };
    const obj2 = { key2: 'value2' };
    const obj3 = { key3: 'value3' };
    const obj4 = { key4: 'value4' };

    const mergeObj = {...obj1, ...obj2, ...obj3, ...obj4 };

    // console.dir(mergeObj);
}

{
    let str = '<a href="http://www.google.com">This is google company</a>';
    const reg = /<a href="(?<url>.*)">(?<text>.*)<\/a>/;

    const result = reg.exec(str);
    console.log(result.groups['url']);
    console.log(result.groups['text']);
}

{
    let str = 'JS1212121MM3344343RRTTYY';
    const reg = /\d+(?=RRTTYY)/;
    const result = reg.exec(str);
    console.log(result);
}