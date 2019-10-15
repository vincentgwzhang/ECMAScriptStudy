{
    var mySum = function (x, y) {
        return x + y;
    };
    // console.log(mySum(12,13));
}
{
    var mySum = function (x, y) {
        console.log("" + (x + y));
    };
    // mySum(12,13);
}
{
    function buildName(firstName, lastName) {
        if (lastName) {
            return firstName + ' ' + lastName;
        }
        else {
            return firstName;
        }
    }
    var tomcat = buildName('Tom', 'Cat');
    var tom = buildName('Tom');
    // console.log(tomcat);
    // console.log(tom);
    // console.log(buildName('TomAA', null));
}
