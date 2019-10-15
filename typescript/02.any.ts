{
    let myFavoriteNumber: any = 'seven';
    // console.log(myFavoriteNumber);
    myFavoriteNumber = 7;
    // console.log(myFavoriteNumber);
}

{
    //在任意值上访问任何属性都是允许的：
    let anyThing;
    anyThing = 7;
    // console.log(anyThing);
    anyThing = "abc";
    // console.log(anyThing);
}

{
    function getString(something: string | number): string {
        if (typeof something === "string") {
            return "something is string";
        } else if (typeof something === "number") {
            return "something is number";
        }
    }
    // console.log(getString("abc"));
    // console.log(getString(123));
}
