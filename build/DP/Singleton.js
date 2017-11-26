"use strict";
class SingletonLazy {
    constructor() {
    }
    static createInstance() {
        if (this.instance == null) {
            this.instance = new SingletonLazy();
            this.instance.name = 'I called singleton';
            return this.instance;
        }
        else {
            return this.instance;
        }
    }
}
console.log(SingletonLazy.name);
console.log(SingletonLazy.createInstance().name);
class SingletonImmediately {
    static createInstance() {
        return this.instance;
    }
}
SingletonImmediately.instance = new SingletonImmediately();
//# sourceMappingURL=Singleton.js.map