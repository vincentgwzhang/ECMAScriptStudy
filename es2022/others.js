// Before ES2022

class ButtonToggle1 extends HTMLElement {
    constructor(){
        super();
        // public field
        this.color = 'green'
        // private field
        this._value = true;
    }
    toggle(){
        this.value = !this.value
    }
}

// After ES2022
class ButtonToggle extends HTMLElement {
   
    color = 'green'
    #value = true;//私有属性
    #toggle(){//私有方法
        this.#value = !this.#value
    }
    set #setFalseValue(){//私有方法
        this.#value = false;
    }

    static toggle2(){//静态方法
        this.#value = !this.#value
    }
}