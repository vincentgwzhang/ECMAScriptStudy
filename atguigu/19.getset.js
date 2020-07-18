{
    class Phone {
        get price() {
            console.log('Price get function called');
            return 'Price Value';
        }

        set price(_price) {
            console.log('Price set function called');
        }
    }

    let p = new Phone();
    //console.log(p.price);
    p.price = 'free';
}