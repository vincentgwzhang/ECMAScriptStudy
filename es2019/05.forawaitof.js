function TimeOut(time, val) {
    return new Promise(function(resolve, reject){
        setTimeout(function(){
            resolve(val);
        }, time);
    })
}


async function test() {
    let arr = [TimeOut(2000, 'a'), TimeOut(1500, 'b'), TimeOut(2500, 'c')];
    for await (let item of arr) {
        console.log(item);
    }
}

test();