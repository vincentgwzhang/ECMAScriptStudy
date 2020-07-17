class EventEmitter {

    constructor() {
        this._lib = [];
    }

    on(type, callback) {
        let lib = this._lib[type] = this._lib[type] || [];
        if (lib.indexOf(callback) === -1) {
            lib.push(callback);
        }
    }

    off(type) {
        let lib = this._lib[type] = this._lib[type] || [];
        lib = [];
    }

    trigger(type, data) {
        let lib = this._lib[type] || [];
        lib.forEach(fn => {
            fn(data);
        });
    }

}

let obj = new EventEmitter();

obj.on('click', function (data) {
    console.log('OnClick has been trigger, data =' + data);
});

obj.trigger('click', 'vincent');
