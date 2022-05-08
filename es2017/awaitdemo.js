async function foo() {
    try {
        let response1 = await fetch('https://blog.csdn.net/');
        let response2 = await fetch('https://blog.csdn.net/');
        console.log(response2);
    } catch(err) {
        console.error(err);
    }
}

foo();