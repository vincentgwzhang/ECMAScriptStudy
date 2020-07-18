{
    function Phone(brand, price) {
        this.brand = brand;
        this.price = price;
    }

    Phone.prototype.call = function() {
        console.log('I am Phone.call function');
    }

    // 继承
    function SmartPhone(brand, price, color) {
        Phone.call(brand, price);

        this.color = color;
    }

    SmartPhone.prototype = new Phone;

    SmartPhone.prototype.photo = function() {
        console.log('I can take photo');
    }

    let chuizi = new SmartPhone('A', 6, 'blue');
    // console.log(chuizi instanceof Phone);
    // chuizi.photo();
    // chuizi.call();
}

{
    class Phone2 {
        constructor(brand, price) {
            this.brand = brand;
            this.price = price;
        }

        call() {
            console.log('I can make a phone call 2');
        }
    }

    class SmartPhone2 extends Phone2 {
        constructor(brand, price, color) {
            super(brand, price);
            this.color = color;
        }

        call() {
            console.log('This is child.call function');
        }
    }

    let phone2 = new SmartPhone('A', 99, 'B');
    phone2.call(); // 默认不能调用跟父类同名的方法的，只要调用就是调用父类的
}