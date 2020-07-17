function add(a,b,c=10) {
    return a+b+c;
}


function connect({username2="a1", password2="n1"}) {
    console.log(username2);
    console.log(password2);
}

connect({
    username2: "name"
});
