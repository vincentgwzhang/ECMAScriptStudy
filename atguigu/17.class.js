{
    function Phone(brand, price) {
        this.brand = brand;
        this.price = price;
    }

    Phone.prototype.call = function() {
        console.log('I can call');
    }

    let phone = new Phone('a', 99);
    //console.log(phone);
}

{
    class Phone {
        constructor(brand, price) {
            this.brand = brand;
            this.price = price;
        }

        static change() {
            console.log('This is static function');
        }

        call() {
            console.log('I can call');
        }
    }

    Phone.staticProperty = 'static value';

    console.log(Phone.staticProperty);
}

{

}