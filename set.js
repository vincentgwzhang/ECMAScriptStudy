/***
 * 由 array -> set :      set = new Set(array);
 * 由 set -> array :      array = [...set];
 * @type {Set<any>}
 *
 *
 * set 的背后其实是一个一维数组
 */

/////////////////////////////////////////////////////////////////////////////////
let s = new Set();

[2, 3, 5, 4, 5, 2, 2].forEach(x => s.add(x));

for (let i of s) {
    //console.log(i);
}

////////////////////////////////////////////////////////////////////////////////
const set = new Set([1, 2, 3, 4, 4]);
//console.log([...set]);//打印[1, 2, 3, 4]
//console.log(set);//Set { 1, 2, 3, 4 }
//set.forEach(x => console.log(x));
//console.log(set.has(3));


let set2 = new Set();
set2.add({});
//console.log(set2.size);//1
set2.add({});
//console.log(set2.size);//2


////////////////////////////////////////////////////////////////////////////////
let sample1 = new Set();
sample1.add(1).add(2).add(2);
// console.log(sample1.size);
// console.log(sample1.has(1));
// console.log(sample1.has(2));
// console.log(sample1.has(3));
sample1.delete(2);
//console.log(sample1.has(2));


////////////////////////////////////////////////////////////////////////////////
const items = new Set([1, 2, 3, 4, 5]);
const array = Array.from(items);
for(let temp of array){
    //console.log(temp);
}


/////////////////////////////////////////////////////////////////////////////////
// 从set 到 array 的转换有两种:
// 1, Array.from(new Set([1,2,3,4]));
// 2, [...new Set([1,2,3])];
{
    function dedupe(array) {
        return Array.from(new Set(array));
    }

    const mm_array = [...new Set([4,5,6,7])];


    //console.log(mm_array[2]);
    //console.log(dedupe([1, 1, 2, 3]));
}

////////////////////////////////////////////////////////////////////////////////////
{
    let set = new Set(['red', 'green', 'blue']);

    for (let item of set.keys()) {
        //console.log(item);//red, green, blue
    }

    for (let item of set.values()) {
        //console.log(item);//red, green, blue
    }

    for (let item of set.entries()) {
        //console.log(item[0] + "===" + item[1]);//red===red, 这是个数组
    }
}

//////////////////////////////////////////////////////////////////////////////////////
{
    let set = new Set(['red', 'green', 'blue']);
    for(let s of set){
        //console.log(s);
    }

    //set.forEach((key, value) => console.log(key));
}


//////////////////////////////////////////////////////////////////////////////////////
//由数组完成 lambda
{
    let arr1 = [1,2,3,4,5];
    let arr2 = arr1.map(x => x * 2);//[2,4,6,8,10]
    let arr3 = arr1.filter(x => x % 2 == 0);//[2,4]
    for(let num of arr3) {
        console.log(num);
    }
}

////////////////////////////////////////////////////////////////////////////////////////
//花样玩发：
{
    let a = new Set([1, 2, 3]);
    let b = new Set([4, 3, 2]);

// 并集
    let union = new Set([...a, ...b]);
// Set {1, 2, 3, 4}

// 交集
    let intersect = new Set([...a].filter(x => b.has(x)));
// set {2, 3}

// 差集
    let difference = new Set([...a].filter(x => !b.has(x)));
// Set {1}
}