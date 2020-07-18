{
    let arr = [1, 2, 3, 4, 5, 4, 3, 2, 1];

    let resultSet = new Set(arr);

    //console.log(resultSet);
}

{
    let arr = [4, 5, 6, 5, 4, 6];

    let arr2 = [1, 2, 3, 4, 5, 4, 3, 2, 1];

    resultSet = new Set(arr2);

    arr = arr.filter((value, index, _arr) => {
        if (resultSet.has(value)) {
            return true;
        } else {
            return false;
        }
    });

    console.log(arr);
}