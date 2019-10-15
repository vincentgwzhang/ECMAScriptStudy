{
    let mySum = function (x: number, y: number): number {
        return x + y;
    };

    // console.log(mySum(12,13));
}

{
    let mySum = function (x: number, y: number): void {
        console.log(`${x + y}`);
    };

    // mySum(12,13);
}

{
    function buildName(firstName: string, lastName?: string) {
        if (lastName) {
            return firstName + ' ' + lastName;
        } else {
            return firstName;
        }
    }
    let tomcat = buildName('Tom', 'Cat');
    let tom = buildName('Tom');

    // console.log(tomcat);
    // console.log(tom);
    // console.log(buildName('TomAA', null));
}
