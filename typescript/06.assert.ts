{
    function getLength(something: string | number) : number {
        if (<string>something.length) {
            return something.length;
        } else {
            return something.toString().length;
        }
    }

    console.log(getLength("vincent"));
    console.log(getLength(123));
}
