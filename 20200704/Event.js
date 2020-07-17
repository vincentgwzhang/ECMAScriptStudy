class Event {
    constructor() {
        this._cache = [];
    }

    on(type, callback) {
        let fns = (this._cache[type] = this._cache[type] || []);
        if (fns.indexOf(callback) === -1) {
            fns.push(callback);
        }
        return this;
    }

    off(type, callback) {
        let fns = this._cache[type];
        if (Array.isArray(fns)) {
            if (callback) {
                let index = fns.indexOf(callback)
                if (index !== -1) {
                    fns.splice(index, 1);
                }
            } else {
                fns.length = 0
            }
        }
        return this;
    }

    trigger(type, data) {
        let fns = this._cache[type];
        if (Array.isArray(fns)) {
            fns.forEach((fn) => {
                fn(data);
            })
        }
        return this;
    };


    once(type, callback) {
        let wrapFun = () => {
            callback.call(this);
            this.off(type, wrapFun);
        };
        this.on(type, wrapFun);
        return this;
    }
}

let obj = new Event();

obj.on('click', function (data) {
    console.log('onClick, data = ' + data);
});

obj.trigger('click', '666');


obj.once('hook', function () {
    console.log('on hook');
});

obj.trigger('hook', 'vincent');
obj.trigger('hook', 'vincent');
//console.log(obj);
