{
    // console.log(Object.is(120, 120));
    // console.log(Object.is(NaN, NaN));
    // console.log(NaN === NaN);
}

{
    const config1 = {
        host: 'localhost'
    }

    const config2 = {
        host: '127.0.0.1',
        port: 3306
    }

    // 合并
    // console.log(Object.assign(config1, config2));
}

{
    const school = {
        name: 'atguigu'
    }

    const cities = {
        xiaoqu: ['a', 'b', 'c']
    }

    Object.setPrototypeOf(school, cities);
    console.log(Object.getPrototypeOf(school));
}