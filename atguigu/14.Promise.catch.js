const p = new Promise((resolve, reject) => {
    reject('Error message');
});

p.catch(data => {
    console.log(data);
});