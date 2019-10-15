{
    interface Person {
        readonly id: number,
        name: string,
        age: number,
        address? : string
    }

    //注意，只读的约束存在于第一次给对象赋值的时候，而不是第一次给只读属性赋值的时候：
    let personObj = {
        id: 123,
        name: "vincent",
        age: 36
    };

    console.log(personObj.name);
}
