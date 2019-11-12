{
    const one_array = [10, [20, [30]]];
    console.log(one_array.flat(1));//[ 10, 20, [ 30 ] ]
    console.log(one_array.flat());//[ 10, 20, [ 30 ] ]

    console.log(one_array.flat(2));//[ 10, 20, 30 ]
}
